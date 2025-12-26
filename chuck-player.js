#!/usr/bin/env node

/**
 * Chuck - Jackbox Virtual Player
 * Joins as audience and votes on the funniest answers
 *
 * USAGE: node chuck-player.js ROOMCODE [NAME]
 * Example: node chuck-player.js WXPT Chuck
 */

const https = require('https');
const WebSocket = require('ws');

const ROOM_CODE = (process.argv[2] || 'WXPT').toUpperCase();
const PLAYER_NAME = process.argv[3] || 'Chuck';

console.log(`🎮 ${PLAYER_NAME} joining room ${ROOM_CODE}...\n`);

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'Accept': 'application/json', 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch { reject(new Error(data)); }
      });
    }).on('error', reject);
  });
}

async function main() {
  // Get room info
  console.log('📡 Finding room...');
  let roomInfo;
  try {
    roomInfo = await fetchJson(`https://blobcast.jackboxgames.com/room/${ROOM_CODE}`);
  } catch (e) {
    console.log('❌ Room not found or expired');
    console.log('   Make sure the game is running and code is correct');
    process.exit(1);
  }

  console.log(`✅ Found: ${roomInfo.apptag} on ${roomInfo.server}`);
  console.log(`   Audience enabled: ${roomInfo.audienceEnabled}\n`);

  // Connect as audience or player
  const userId = 'chuck_' + Math.random().toString(36).substr(2, 6);
  const role = roomInfo.joinAs === 'audience' ? 'audience' : 'play';
  const wsUrl = `wss://${roomInfo.server}/api/v2/rooms/${ROOM_CODE}/${role}?userId=${userId}&name=${encodeURIComponent(PLAYER_NAME)}&format=json`;

  console.log(`🔌 Connecting as ${role}...`);

  const ws = new WebSocket(wsUrl, {
    headers: { 'Origin': 'https://jackbox.tv', 'User-Agent': 'Mozilla/5.0' }
  });

  ws.on('open', () => {
    console.log(`✅ ${PLAYER_NAME} is in the game!\n`);
  });

  ws.on('message', raw => {
    try {
      const msg = JSON.parse(raw.toString());
      handleGame(ws, msg);
    } catch {}
  });

  ws.on('error', e => console.error('❌', e.message));
  ws.on('close', () => { console.log('\n👋 Game ended'); process.exit(0); });

  // Keep alive
  setInterval(() => ws.readyState === 1 && ws.ping(), 20000);
}

function handleGame(ws, msg) {
  if (msg.opcode === 'client/welcome') {
    console.log(`🎉 Connected! ID: ${msg.result?.id}`);
    return;
  }

  if (msg.opcode === 'object' && msg.result) {
    const { key, val } = msg.result;

    // Vote on choices (Quiplash, Fibbage, etc.)
    if (val?.choices?.length) {
      const pick = Math.floor(Math.random() * val.choices.length);
      console.log(`🗳️ Voting: "${val.choices[pick]?.text || val.choices[pick]}"`);
      setTimeout(() => {
        ws.send(JSON.stringify({ opcode: 'client/send', params: { key, val: pick } }));
      }, 1000 + Math.random() * 2000);
    }

    // Submit lies/answers (Fibbage)
    if (key?.includes('lie') || val?.enterLie) {
      const lies = ["A confused penguin", "My WiFi password", "Competitive napping", "Grandma's secret", "A haunted taco"];
      const lie = lies[Math.floor(Math.random() * lies.length)];
      console.log(`✍️ Submitting: "${lie}"`);
      ws.send(JSON.stringify({ opcode: 'client/send', params: { key, val: lie } }));
    }
  }
}

main().catch(e => { console.error('Error:', e.message); process.exit(1); });
