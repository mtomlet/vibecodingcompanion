"use client";
import { useEffect, useMemo, useState } from "react";



interface StyleItem {
  id: number;
  name: string;
  prompt: string;
  preview: () => JSX.Element;
}

export default function Home() {
  // SEO
  useEffect(() => {
    document.title = "Vibe Coding Companion — Style Switcher";
  }, []);

  const master = useMemo(
    () =>
      `Build a responsive website in <TECH_STACK> with clean, accessible, production-ready code. Use semantic HTML, ARIA labels, and a11y best practices. Keep components modular. Add smooth, subtle micro-interactions. DO NOT add filler text; use short, meaningful copy. Keep the code in a single file unless components are required.\n\nNow apply this style modifier exactly:\n"{STYLE}"`,
    []
  );

  const [toast, setToast] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToast(msg);
    window.clearTimeout((showToast as any)._t);
    (showToast as any)._t = window.setTimeout(() => setToast(null), 1500);
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied!");
    } catch (e) {
      console.error(e);
      showToast("Copy failed");
    }
  };

  const styles: StyleItem[] = [
    // 1-50 Originals
    {
      id: 1,
      name: "Tesla-Style Minimalism",
      prompt:
        "Make the design hyper-minimalistic like Tesla’s website: mostly white with subtle gray accents, extremely thin sans-serif typography, large whitespace, centered layouts, slow fade animations, and crisp, high-res images.",
      preview: () => (
        <div className="bg-white text-zinc-900 p-6 rounded-xl border border-zinc-200 text-center">
          <div className="text-xs tracking-widest text-zinc-400">PRODUCT</div>
          <div className="text-3xl font-extrabold mt-2">Immaculate Minimal</div>
          <div className="mt-3 text-zinc-500">Whitespace. Precision. Focus.</div>
          <button className="mt-4 px-4 py-2 rounded-md bg-black text-white">Shop</button>
        </div>
      ),
    },
    {
      id: 2,
      name: "Cyberpunk Neon",
      prompt:
        "Style the website with a cyberpunk aesthetic: black background, neon pink, blue, and purple gradients, glowing borders, animated glitch text effects, and futuristic monospace fonts.",
      preview: () => (
        <div className="p-6 rounded-xl border border-fuchsia-500/50 bg-gradient-to-br from-black via-zinc-900 to-fuchsia-900 text-fuchsia-200 shadow-[0_0_20px_rgba(236,72,153,.3)] font-mono">
          <div className="text-xs text-fuchsia-300">NODE: NEON</div>
          <div className="text-3xl font-bold">
            CYBER<span className="animate-pulse">_</span>PUNK
          </div>
          <div className="mt-2 text-fuchsia-300/80">Glitch. Glow. Grid.</div>
        </div>
      ),
    },
    {
      id: 3,
      name: "Luxury Black & Gold",
      prompt:
        "Make it feel ultra-luxury: pure black backgrounds, gold typography and accents, smooth animations, serif display fonts, and slow fade-in effects that convey elegance.",
      preview: () => (
        <div className="p-6 rounded-xl bg-black border border-amber-500/40 text-amber-300" style={{ fontFamily: '"Playfair Display", serif' }}>
          <div className="text-xs tracking-widest text-amber-400/70">COLLECTION</div>
          <div className="text-3xl">Black Label</div>
          <div className="mt-2 text-amber-200/80">Elegance. Restraint. Craft.</div>
        </div>
      ),
    },
    {
      id: 4,
      name: "Scandinavian Minimal",
      prompt:
        "Use a Scandinavian design style: soft pastel backgrounds, plenty of white space, muted typography, rounded edges, gentle shadows, and calming hover animations.",
      preview: () => (
        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-sky-50 text-zinc-700 border border-white shadow">
          <div className="text-sm uppercase tracking-wide text-zinc-400">Calm</div>
          <div className="text-2xl font-bold">Nordic Ease</div>
          <div className="mt-2">Soft tones & gentle space.</div>
        </div>
      ),
    },
    {
      id: 5,
      name: "Brutalist Web Design",
      prompt:
        "Give it a brutalist aesthetic: bold blocky typography, clashing colors, visible borders, no rounded corners, almost ‘raw’ HTML feel but intentionally styled for an artful, edgy look.",
      preview: () => (
        <div className="p-6 brutalist bg-yellow-300 text-black">
          <div className="uppercase tracking-tight">
            <div className="text-xs">LOUD BOX</div>
            <div className="text-3xl font-extrabold">BRUTAL MODE</div>
            <div className="mt-2">Unstyled on purpose.</div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      name: "Apple Product Page",
      prompt:
        "Make it look like Apple’s product pages: large hero images, ultra-thin Helvetica Neue font, gray gradients, parallax scrolling on product sections, and clean subtle hover animations.",
      preview: () => (
        <div className="p-6 rounded-xl bg-gradient-to-b from-white to-zinc-100 text-zinc-800 border border-zinc-200" style={{ fontWeight: 300 }}>
          <div className="text-3xl">So light. So powerful.</div>
          <div className="mt-2 text-zinc-500">Say hello to clarity.</div>
        </div>
      ),
    },
    {
      id: 7,
      name: "Retro 90’s Web 1.0",
      prompt:
        "Style it with a nostalgic late-90’s aesthetic: pixelated fonts, patterned backgrounds, bright primary colors, GIF animations, skeuomorphic buttons, and old-school boxy layouts.",
      preview: () => (
        <div className="p-6 rounded-xl retro90 text-blue-900 border border-blue-500" style={{ fontFamily: '"Space Mono", monospace' }}>
          <div className="text-3xl">Welcome to My Site!</div>
          <button className="mt-3 px-3 py-1 bg-yellow-300 border-2 border-black">Sign Guestbook</button>
        </div>
      ),
    },
    {
      id: 8,
      name: "Magazine Editorial",
      prompt:
        "Design it like a high-end fashion magazine: large serif headlines, overlapping text on images, asymmetrical layouts, black-and-white photography with bold pops of color.",
      preview: () => (
        <div className="p-6 rounded-xl bg-white text-zinc-900 border border-zinc-200 relative" style={{ fontFamily: '"Playfair Display", serif' }}>
          <div className="text-4xl leading-none whitespace-pre">VOGUE\nISSUE</div>
          <div className="absolute -top-2 -right-2 px-2 py-1 bg-black text-white text-xs">SS'25</div>
          <div className="mt-3 text-pink-600 font-semibold">Bold & Editorial</div>
        </div>
      ),
    },
    {
      id: 9,
      name: "Nature-Inspired",
      prompt:
        "Style the website with a nature-inspired aesthetic: soft earth tones, leafy patterns, natural textures, hand-drawn icons, and gentle animations that feel organic.",
      preview: () => (
        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-100 to-amber-100 text-emerald-900 border border-emerald-300/40">
          <div className="text-3xl font-extrabold">Evergreen</div>
          <div className="mt-2">Organic rhythm & earth tones.</div>
        </div>
      ),
    },
    {
      id: 10,
      name: "Dark Hacker Terminal",
      prompt:
        "Give it a hacker terminal vibe: black background, bright green monospace text, subtle scan-line overlay, typewriter animations, and blinking cursor effects.",
      preview: () => (
        <div className="p-6 rounded-xl terminal scanlines border border-emerald-500/30 font-mono">
          $ boot sequence<span className="animate-pulse">_</span>
          <br />
          ready&gt;
        </div>
      ),
    },
    {
      id: 11,
      name: "Glassmorphism",
      prompt:
        "Style it with a glassmorphism effect: frosted glass panels, blurred backgrounds, soft shadows, semi-transparent cards, and pastel gradient accents.",
      preview: () => (
        <div className="p-6 rounded-xl glass bg-white/10 border border-white/20 text-white backdrop-saturate-150">
          <div className="text-2xl font-bold">Frosted UI</div>
          <div className="mt-1 text-white/80">Blur + translucency.</div>
        </div>
      ),
    },
    {
      id: 12,
      name: "Minimal Dark Mode",
      prompt:
        "Use a minimalist dark mode aesthetic: deep charcoal background, light gray typography, a single accent color for highlights, and smooth micro-interactions.",
      preview: () => (
        <div className="p-6 rounded-xl bg-zinc-900 text-zinc-200 border border-white/10">
          <div className="text-2xl font-bold">Night Shift</div>
          <div className="mt-1 text-zinc-400">Calm contrast, one accent.</div>
        </div>
      ),
    },
    {
      id: 13,
      name: "Japanese Zen",
      prompt:
        "Design it in a Japanese Zen style: muted beige and off-white backgrounds, minimalist typography, thin black lines, generous whitespace, and subtle paper textures.",
      preview: () => (
        <div className="p-6 rounded-xl border border-zinc-300 text-zinc-800" style={{ background: "linear-gradient(0deg,#faf7f2,#f7f3ec)" }}>
          <div className="tracking-wide">
            <div className="text-2xl">静  —  Quiet Balance</div>
            <div className="mt-1 text-zinc-500">Paper, ink, space.</div>
          </div>
        </div>
      ),
    },
    {
      id: 14,
      name: "Y2K Futurism",
      prompt:
        "Give it a Y2K futuristic aesthetic: metallic gradients, holographic text effects, chunky bubble fonts, reflective surfaces, and bold pastel color palettes.",
      preview: () => (
        <div className="p-6 rounded-xl text-zinc-900 border border-white/40 y2k drop-shadow" style={{ fontFamily: '"Space Mono", monospace' }}>
          <div className="text-3xl">HoloFX 2000</div>
          <div className="mt-1">Chrome vibes & bubbles.</div>
        </div>
      ),
    },
    {
      id: 15,
      name: "Space & Sci‑Fi",
      prompt:
        "Make it space-themed: black starfield background, glowing constellations, parallax scrolling planets, futuristic fonts, and neon cyan/purple highlights.",
      preview: () => (
        <div className="p-6 rounded-xl starfield text-cyan-200 border border-cyan-500/30 font-mono">
          <div className="text-2xl">Orion Deck</div>
          <div className="mt-1 text-cyan-300/80">Cyan thrusters engaged.</div>
        </div>
      ),
    },
    {
      id: 16,
      name: "Hand‑Drawn Sketch",
      prompt:
        "Use a whimsical hand-drawn aesthetic: rough pencil lines, doodle-style icons, pastel backgrounds, uneven borders, and casual handwritten fonts.",
      preview: () => (
        <div className="p-6 rounded-xl bg-rose-50 text-rose-900 border-2 border-rose-300" style={{ borderStyle: "dashed", fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
          <div className="text-2xl">Sketchbook</div>
          <div className="mt-1">Wobbly lines, playful.</div>
        </div>
      ),
    },
    {
      id: 17,
      name: "Corporate Clean",
      prompt:
        "Style it for a high-end corporate look: light gray background, navy and blue accents, clean sans-serif fonts, consistent grid layouts, and professional photography.",
      preview: () => (
        <div className="p-6 rounded-xl bg-zinc-100 text-zinc-800 border border-zinc-300">
          <div className="text-xs tracking-widest text-blue-700">ENTERPRISE</div>
          <div className="text-2xl font-bold">Corporate Clean</div>
          <div className="mt-1 text-zinc-500">Trustworthy & clear.</div>
        </div>
      ),
    },
    {
      id: 18,
      name: "Vibrant Gradient Explosion",
      prompt:
        "Make it colorful and bold: full-screen animated gradients, oversized typography, glowing buttons, and playful hover effects.",
      preview: () => (
        <div
          className="p-6 rounded-xl text-white border border-white/20"
          style={{
            background: "linear-gradient(120deg,#f00,#f0f,#00f,#0ff,#0f0)",
            backgroundSize: "400% 400%",
            animation: "grad 8s ease infinite",
          }}
        >
          <style>{`@keyframes grad{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
          <div className="text-3xl font-extrabold tracking-tight">LOUD GRADIENTS</div>
          <div className="mt-1">Color that slaps.</div>
        </div>
      ),
    },
    {
      id: 19,
      name: "Monochrome Minimal",
      prompt:
        "Design in strict monochrome: black, white, and grayscale only, with high contrast, bold typography, and no color except on interactive elements.",
      preview: () => (
        <div className="p-6 rounded-xl bg-white text-black border border-black">
          <div className="text-3xl font-extrabold">Mono Only</div>
          <div className="mt-1 text-zinc-700">Contrast is the hero.</div>
        </div>
      ),
    },
    {
      id: 20,
      name: "Cozy Coffee Shop",
      prompt:
        "Give it a cozy coffee shop vibe: warm brown and cream tones, textured backgrounds like wood or paper, cursive headline fonts, and soft drop shadows.",
      preview: () => (
        <div className="p-6 rounded-xl border border-amber-700/30 text-amber-900" style={{ background: "linear-gradient(0deg,#fdf6e3,#f6e8d5)", fontFamily: '"Playfair Display", serif' }}>
          <div className="text-3xl">Café Locale</div>
          <div className="mt-1">Warm, textured, inviting.</div>
        </div>
      ),
    },
    {
      id: 21,
      name: "Bauhaus Geometry",
      prompt:
        "Primary colors, geometric blocks, strict grid, bold functional typography.",
      preview: () => (
        <div className="p-6 rounded-xl bg-white text-zinc-900 border border-zinc-200">
          <div className="text-xs tracking-widest text-zinc-400">MODERNISM</div>
          <div className="text-3xl font-extrabold">Bauhaus Grid</div>
          <div className="mt-2 flex gap-1">
            <span className="w-5 h-3 bg-red-600 inline-block" />
            <span className="w-5 h-3 bg-yellow-400 inline-block" />
            <span className="w-5 h-3 bg-blue-600 inline-block" />
          </div>
        </div>
      ),
    },
    {
      id: 22,
      name: "Vaporwave Pastel Grid",
      prompt:
        "Lavender/pink/teal pastels, retro grid sun, lo‑fi grain, dreamy headings.",
      preview: () => (
        <div className="p-6 rounded-xl border border-pink-300/40 text-purple-900 bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100">
          <div className="text-xs tracking-widest text-pink-500">A E S T H E T I C</div>
          <div className="text-3xl font-bold">Vaporwave</div>
          <div className="mt-1 opacity-80">Grid • Sun • Pastel</div>
        </div>
      ),
    },
    {
      id: 23,
      name: "Desert Clay",
      prompt:
        "Terracotta, burnt orange, sand gradients, heat‑haze separators, grounded serif.",
      preview: () => (
        <div className="p-6 rounded-xl border border-orange-300/40 text-amber-900 bg-gradient-to-br from-amber-100 to-orange-100">
          <div className="text-xs tracking-widest text-orange-600">SOUTHWEST</div>
          <div className="text-3xl font-bold">Desert Clay</div>
          <div className="mt-1 opacity-80">Warm • Textured • Earthy</div>
        </div>
      ),
    },
    {
      id: 24,
      name: "Ocean Glass",
      prompt:
        "Translucent glass cards over ocean blues, soft cyan highlights, gentle blur.",
      preview: () => (
        <div className="p-6 rounded-xl glass text-white border border-white/20 bg-gradient-to-br from-sky-500/30 to-cyan-600/30">
          <div className="text-xs tracking-widest text-cyan-200">MARINE</div>
          <div className="text-3xl font-bold">Ocean Glass</div>
          <div className="mt-1 text-white/80">Frosted • Fluid • Calm</div>
        </div>
      ),
    },
    {
      id: 25,
      name: "Art Deco Lines",
      prompt:
        "Black backdrop, gold hairlines, stepped frames, tall display serif, luxe rhythm.",
      preview: () => (
        <div className="p-6 rounded-xl bg-black text-amber-200 border border-amber-500/40" style={{ fontFamily: '"Playfair Display", serif' }}>
          <div className="text-xs tracking-[0.3em] text-amber-400/80">DECO</div>
          <div className="text-3xl">Gilded Lines</div>
          <div className="mt-1">Symmetry • Opulence</div>
        </div>
      ),
    },
    {
      id: 26,
      name: "Forest Canopy",
      prompt:
        "Moss greens, dappled light, leaf dividers, organic motion, earthy UI.",
      preview: () => (
        <div className="p-6 rounded-xl text-emerald-900 border border-emerald-300/40 bg-gradient-to-br from-emerald-100 to-green-200">
          <div className="text-xs tracking-widest text-emerald-700">WILD</div>
          <div className="text-3xl font-extrabold">Forest Canopy</div>
          <div className="mt-1">Leafy • Fresh • Organic</div>
        </div>
      ),
    },
    {
      id: 27,
      name: "Chalkboard Classroom",
      prompt:
        "Black/green board, chalk textures, hand‑drawn icons, playful education vibe.",
      preview: () => (
        <div className="p-6 rounded-xl text-green-100 border border-green-700 bg-green-900">
          <div className="text-xs tracking-widest text-green-300">LEARN</div>
          <div className="text-3xl font-bold">Chalkboard</div>
          <div className="mt-1 opacity-80">Scribbles • Smudge • Notes</div>
        </div>
      ),
    },
    {
      id: 28,
      name: "Blueprint Tech",
      prompt: "Cobalt blueprint grid, white lines, technical labels, precise spacing.",
      preview: () => (
        <div className="p-6 rounded-xl text-blue-100 border border-blue-600 bg-blue-900">
          <div className="text-xs tracking-widest text-blue-300">DRAFT</div>
          <div className="text-3xl font-bold">Blueprint</div>
          <div className="mt-1 opacity-80">Grid • Lines • Spec</div>
        </div>
      ),
    },
    {
      id: 29,
      name: "Marble Editorial",
      prompt:
        "White marble veins, elegant serif headers, airy spacing, couture feel.",
      preview: () => (
        <div className="p-6 rounded-xl text-zinc-900 border border-amber-300 bg-white" style={{ fontFamily: '"Playfair Display", serif' }}>
          <div className="text-xs tracking-widest text-zinc-500">COUTURE</div>
          <div className="text-3xl">Marble Editorial</div>
          <div className="mt-1 text-zinc-600">Polished • Refined</div>
        </div>
      ),
    },
    {
      id: 30,
      name: "Retro Arcade",
      prompt: "Neon gradients on dark, pixel fonts, coin‑op vibe, fun hovers.",
      preview: () => (
        <div className="p-6 rounded-xl border border-fuchsia-500/40 text-yellow-300 bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 font-mono">
          <div className="text-xs tracking-widest text-fuchsia-300">INSERT COIN</div>
          <div className="text-3xl font-bold">Retro Arcade</div>
          <div className="mt-1 text-fuchsia-200/80">Glow • Pixels • Play</div>
        </div>
      ),
    },
    {
      id: 31,
      name: "Artisan Bakery",
      prompt:
        "Warm cream and wheat tones, soft shadows, hand‑drawn flourishes, cozy serif headings.",
      preview: () => (
        <div className="p-6 rounded-xl border border-amber-300 text-amber-900" style={{ background: "linear-gradient(0deg,#fff7ea,#f6e3c5)", fontFamily: '"Playfair Display", serif' }}>
          <div className="text-xs tracking-widest text-amber-700">FRESH</div>
          <div className="text-3xl font-bold">Artisan Bakery</div>
          <div className="mt-1 opacity-80">Crust • Crumb • Craft</div>
        </div>
      ),
    },
    {
      id: 32,
      name: "Nordic Snow",
      prompt:
        "Icy whites and soft slate blues, thin hairlines, airy spacing, calm minimal.",
      preview: () => (
        <div className="p-6 rounded-xl border border-sky-200 text-slate-800" style={{ background: "linear-gradient(180deg,#ffffff,#eef6ff)" }}>
          <div className="text-xs tracking-widest text-sky-600">NORDIC</div>
          <div className="text-3xl font-extrabold">Snow Quiet</div>
          <div className="mt-1 text-slate-500">Light • Crisp • Clean</div>
        </div>
      ),
    },
    {
      id: 33,
      name: "Graffiti Street",
      prompt:
        "Dark asphalt base, neon paint splashes, bold condensed type, gritty vibe.",
      preview: () => (
        <div className="p-6 rounded-xl border border-fuchsia-500/40 text-fuchsia-200" style={{ background: "radial-gradient(circle at 20% 30%,#111,#000 60%)" }}>
          <div className="font-mono">
            <div className="text-xs tracking-widest text-fuchsia-400">URBAN</div>
            <div className="text-3xl font-bold">Graffiti</div>
            <div className="mt-1 text-fuchsia-300/80">Spray • Drip • Noise</div>
          </div>
        </div>
      ),
    },
    {
      id: 34,
      name: "Vintage Film",
      prompt:
        "Sepia wash, grain overlay feel, serif headlines, film headings with captions.",
      preview: () => (
        <div className="p-6 rounded-xl border border-amber-600/30 text-amber-900" style={{ background: "linear-gradient(180deg,#f2e7cf,#e8d7b7)", fontFamily: '"Playfair Display", serif' }}>
          <div className="text-xs tracking-widest text-amber-700">ANALOG</div>
          <div className="text-3xl">Vintage Film</div>
          <div className="mt-1 opacity-80">Grain • Sepia • Frames</div>
        </div>
      ),
    },
    {
      id: 35,
      name: "Circuit Board Neon",
      prompt:
        "Deep navy with cyan/green traces, grid dots, techy mono, glow accents.",
      preview: () => (
        <div className="p-6 rounded-xl border border-emerald-500/40 text-emerald-200" style={{ background: "linear-gradient(180deg,#010a16,#061d2a)" }}>
          <div className="font-mono">
            <div className="text-xs tracking-widest text-emerald-400">ELECTRON</div>
            <div className="text-3xl font-bold">PCB Neon</div>
            <div className="mt-1 text-emerald-300/80">Traces • Nodes • Glow</div>
          </div>
        </div>
      ),
    },
    {
      id: 36,
      name: "Solarized Terminal",
      prompt: "Solarized dark palette, mono text, subtle borders, code‑centric layout.",
      preview: () => (
        <div className="p-6 rounded-xl border border-emerald-300/30 font-mono" style={{ background: "#002b36", color: "#93a1a1" }}>
          <div className="text-xs" style={{ color: "#b58900" }}>
            SESSION
          </div>
          <div className="text-3xl" style={{ color: "#2aa198" }}>
            Solarized
          </div>
          <div className="mt-1" style={{ color: "#839496" }}>
            &gt;$ echo ready
          </div>
        </div>
      ),
    },
    {
      id: 37,
      name: "Memphis Sprinkles",
      prompt:
        "80s Memphis shapes, playful sprinkles, bold pastels, quirky spacing.",
      preview: () => (
        <div className="p-6 rounded-xl border border-pink-300/40 text-zinc-900 bg-gradient-to-br from-yellow-100 to-pink-100">
          <div className="text-xs tracking-widest text-pink-600">MEMPHIS</div>
          <div className="text-3xl font-bold">Sprinkles</div>
          <div className="mt-1 opacity-80">Dots • Dashes • Fun</div>
        </div>
      ),
    },
    {
      id: 38,
      name: "Zen Sand Garden",
      prompt: "Raked sand lines, stone neutrals, quiet strokes, meditative spacing.",
      preview: () => (
        <div className="p-6 rounded-xl border border-zinc-300 text-zinc-800" style={{ background: "repeating-linear-gradient(0deg,#faf6ef,#faf6ef 8px,#f3ecde 9px,#f3ecde 16px)" }}>
          <div className="text-xs tracking-widest text-zinc-500">ZEN</div>
          <div className="text-3xl font-bold">Sand Garden</div>
          <div className="mt-1 text-zinc-500">Calm • Lines • Stone</div>
        </div>
      ),
    },
    {
      id: 39,
      name: "Industrial Rust",
      prompt: "Oxide oranges, dark steel, stamped labels, heavy grids, rugged tone.",
      preview: () => (
        <div className="p-6 rounded-xl border border-orange-800/40 text-orange-100" style={{ background: "linear-gradient(180deg,#5a2e1a,#2b1b14)" }}>
          <div className="text-xs tracking-widest text-orange-400">INDUSTRIAL</div>
          <div className="text-3xl font-bold">Rust Works</div>
          <div className="mt-1 text-orange-300/80">Steel • Oxide • Grit</div>
        </div>
      ),
    },
    {
      id: 40,
      name: "Aurora Borealis",
      prompt:
        "Night gradients with flowing greens/purples, glow edges, soft stars.",
      preview: () => (
        <div
          className="p-6 rounded-xl border border-emerald-400/30 text-emerald-100"
          style={{
            background:
              "linear-gradient(135deg,#0b1020,#161b35 60%), radial-gradient(80% 60% at 20% 30%,rgba(16,185,129,.35),transparent), radial-gradient(80% 60% at 80% 70%,rgba(168,85,247,.35),transparent)",
          }}
        >
          <div className="text-xs tracking-widest text-emerald-300">NORTH</div>
          <div className="text-3xl font-bold">Aurora</div>
          <div className="mt-1 text-emerald-200/80">Waves • Night • Glow</div>
        </div>
      ),
    },
    {
      id: 41,
      name: "Purple Velvet Luxe",
      prompt: "Deep velvet purples, gold accents, elegant serif, opulent spacing.",
      preview: () => (
        <div className="p-6 rounded-xl border border-amber-400/30 text-amber-200" style={{ background: "linear-gradient(180deg,#2a0e3f,#4b166e)", fontFamily: '"Playfair Display", serif' }}>
          <div className="text-xs tracking-widest text-amber-300">LUXE</div>
          <div className="text-3xl">Velvet</div>
          <div className="mt-1">Rich • Plush • Gold</div>
        </div>
      ),
    },
    {
      id: 42,
      name: "Highlighter Zine",
      prompt: "Neon yellow paper, rough black type, photocopy vibe, DIY energy.",
      preview: () => (
        <div className="p-6 rounded-xl border border-black text-black font-mono" style={{ background: "#faff00" }}>
          <div className="text-xs tracking-widest">ZINE</div>
          <div className="text-3xl font-extrabold">Highlighter</div>
          <div className="mt-1 opacity-80">Copy • Cut • Paste</div>
        </div>
      ),
    },
    {
      id: 43,
      name: "Tropical Sunset Film",
      prompt: "Warm gradient sky, film caption label, relaxed serif, holiday vibe.",
      preview: () => (
        <div className="p-6 rounded-xl border border-rose-400/40 text-white" style={{ background: "linear-gradient(120deg,#ff7a59,#f94f8e,#7e5bef)", fontFamily: '"Playfair Display", serif' }}>
          <div className="text-xs tracking-widest text-white/80">SUNSET</div>
          <div className="text-3xl">Tropical Reel</div>
          <div className="mt-1 text-white/80">Warm • Grain • Chill</div>
        </div>
      ),
    },
    {
      id: 44,
      name: "Coral Reef",
      prompt: "Cyan and coral palette, bubbly dividers, friendly rounded UI, lively.",
      preview: () => (
        <div className="p-6 rounded-xl border border-cyan-400/40 text-white" style={{ background: "linear-gradient(135deg,#06b6d4,#f43f5e)" }}>
          <div className="text-xs tracking-widest text-white/80">REEF</div>
          <div className="text-3xl font-bold">Coral</div>
          <div className="mt-1 text-white/80">Bubbles • Drift • Life</div>
        </div>
      ),
    },
    {
      id: 45,
      name: "Botanical Sketchbook",
      prompt: "Off‑white paper, pencil sketches, green ink headers, notebook accents.",
      preview: () => (
        <div className="p-6 rounded-xl border border-emerald-300 text-emerald-900" style={{ background: "linear-gradient(0deg,#fffdf7,#f7f7ef)" }}>
          <div className="text-xs tracking-widest text-emerald-600">BOTANY</div>
          <div className="text-3xl font-bold">Sketchbook</div>
          <div className="mt-1 opacity-80">Leaf • Line • Label</div>
        </div>
      ),
    },
    {
      id: 46,
      name: "Concrete Minimal",
      prompt: "Cool concrete grays, thin dark lines, sharp grid, industrial calm.",
      preview: () => (
        <div className="p-6 rounded-xl border border-zinc-400 text-zinc-800" style={{ background: "linear-gradient(180deg,#f2f2f2,#e5e5e5)" }}>
          <div className="text-xs tracking-widest text-zinc-500">CONCRETE</div>
          <div className="text-3xl font-extrabold">Bare Minimal</div>
          <div className="mt-1 text-zinc-500">Raw • Grid • Order</div>
        </div>
      ),
    },
    {
      id: 47,
      name: "Lavender Haze",
      prompt: "Soft lavender and lilac tones, pill buttons, airy glow, dreamy feel.",
      preview: () => (
        <div className="p-6 rounded-xl border border-purple-300/60 text-purple-900" style={{ background: "linear-gradient(135deg,#ede9fe,#f5f3ff)" }}>
          <div className="text-xs tracking-widest text-purple-600">SOFT</div>
          <div className="text-3xl font-bold">Lavender</div>
          <div className="mt-1 opacity-80">Calm • Bloom • Light</div>
        </div>
      ),
    },
    {
      id: 48,
      name: "Duotone Punch",
      prompt: "Two‑color palette, oversized type, stark contrast, poster vibes.",
      preview: () => (
        <div className="p-6 rounded-xl border border-black text-white" style={{ background: "linear-gradient(90deg,#111827 50%,#ef4444 50%)" }}>
          <div className="text-xs">DUOTONE</div>
          <div className="text-3xl font-extrabold">Punch</div>
          <div className="mt-1 text-white/80">Bold • Simple • Loud</div>
        </div>
      ),
    },
    {
      id: 49,
      name: "Gothic Cathedral",
      prompt: "Charcoal stone, stained‑glass accents, tall blackletter headings, solemn.",
      preview: () => (
        <div className="p-6 rounded-xl border border-indigo-500/30 text-indigo-200" style={{ background: "radial-gradient(circle at 30% 20%,#1f2230,#0f1120 60%)" }}>
          <div className="text-xs tracking-widest text-indigo-300">GOTHIC</div>
          <div className="text-3xl font-bold">Cathedral</div>
          <div className="mt-1 text-indigo-300/80">Stone • Arch • Light</div>
        </div>
      ),
    },
    {
      id: 50,
      name: "Coastal Navy",
      prompt: "Navy and white, brass hints, maritime stripes, crisp typography.",
      preview: () => (
        <div className="p-6 rounded-xl border border-blue-700/40 text-blue-100" style={{ background: "linear-gradient(180deg,#0b2a45,#103b5b)" }}>
          <div className="text-xs tracking-widest text-blue-300">COASTAL</div>
          <div className="text-3xl font-bold">Navy Deck</div>
          <div className="mt-1 text-blue-200/80">Sea • Brass • Stripe</div>
        </div>
      ),
    },
    // +20 new unique styles 51-70
    {
      id: 51,
      name: "Copper & Charcoal",
      prompt:
        "Warm copper accents on deep charcoal, metallic lines, premium industrial vibe.",
      preview: () => (
        <div className="p-6 rounded-xl border border-amber-600/30 text-amber-200" style={{ background: "linear-gradient(135deg,#111111,#2a2a2a 60%,#6b3e1d)" }}>
          <div className="text-xs tracking-widest text-amber-300">ALLOY</div>
          <div className="text-3xl font-bold">Copper & Charcoal</div>
          <div className="mt-1 text-amber-200/80">Metal • Weight • Heat</div>
        </div>
      ),
    },
    {
      id: 52,
      name: "Mint SaaS Pastel",
      prompt:
        "Clean SaaS with mint pastels, soft cards, gentle shadows, friendly sans.",
      preview: () => (
        <div className="p-6 rounded-xl border border-emerald-300/50 text-emerald-900" style={{ background: "linear-gradient(180deg,#e9fff5,#d9fff0)" }}>
          <div className="text-xs tracking-widest text-emerald-600">SaaS</div>
          <div className="text-3xl font-extrabold">Minty Fresh</div>
          <div className="mt-1 text-emerald-700/80">Clean • Soft • Clear</div>
        </div>
      ),
    },
    {
      id: 53,
      name: "Royal Newspaper",
      prompt:
        "Black/white serif with royal blue accents, rule lines, refined headlines.",
      preview: () => (
        <div className="p-6 rounded-xl border border-zinc-300 text-zinc-900 bg-white" style={{ fontFamily: '"Playfair Display", serif' }}>
          <div className="text-xs tracking-widest text-blue-700">EDITION</div>
          <div className="text-3xl">Royal Gazette</div>
          <div className="mt-1 text-zinc-600">Columns • Rules • Serif</div>
        </div>
      ),
    },
    {
      id: 54,
      name: "Neon Noir",
      prompt:
        "Moody dark with neon magenta/cyan trims, cinematic shadows, noir imagery.",
      preview: () => (
        <div className="p-6 rounded-xl border border-fuchsia-400/30 text-fuchsia-100 bg-gradient-to-br from-zinc-950 via-zinc-900 to-fuchsia-950">
          <div className="text-xs tracking-widest text-fuchsia-300">NOIR</div>
          <div className="text-3xl font-bold">Neon Noir</div>
          <div className="mt-1 text-fuchsia-200/80">Moody • Glow • Film</div>
        </div>
      ),
    },
    {
      id: 55,
      name: "Claymorphism Soft",
      prompt:
        "Soft 3D claymorphism cards, pill buttons, pastel surfaces, gentle depth.",
      preview: () => (
        <div className="p-6 rounded-2xl bg-purple-100 text-purple-900 border border-purple-200 shadow-[inset_0_-6px_12px_rgba(255,255,255,0.6),0_12px_24px_rgba(0,0,0,0.06)]">
          <div className="text-xs tracking-widest text-purple-600">SOFT 3D</div>
          <div className="text-3xl font-bold">Clay UI</div>
          <div className="mt-1 opacity-80">Pill • Plump • Plush</div>
        </div>
      ),
    },
    {
      id: 56,
      name: "Gradient Mesh Art",
      prompt:
        "Abstract gradient meshes, soft blobs, layered color fields, artistic vibe.",
      preview: () => (
        <div className="p-6 rounded-xl text-white border border-white/20" style={{ background: "radial-gradient(80% 80% at 20% 20%,#ef4444,transparent 60%), radial-gradient(60% 60% at 80% 30%,#3b82f6,transparent 60%), radial-gradient(70% 70% at 40% 80%,#22d3ee,transparent 60%), #111827" }}>
          <div className="text-xs tracking-widest text-white/80">MESH</div>
          <div className="text-3xl font-extrabold">Color Fields</div>
          <div className="mt-1 text-white/80">Blobs • Blend • Art</div>
        </div>
      ),
    },
    {
      id: 57,
      name: "Sakura Blossom",
      prompt:
        "Pale pinks and creams, petal dividers, soft shadows, tranquil typographic flow.",
      preview: () => (
        <div className="p-6 rounded-xl border border-rose-200 text-rose-900 bg-gradient-to-b from-rose-50 to-rose-100">
          <div className="text-xs tracking-widest text-rose-600">SAKURA</div>
          <div className="text-3xl font-bold">Blossom</div>
          <div className="mt-1 opacity-80">Petal • Breeze • Bloom</div>
        </div>
      ),
    },
    {
      id: 58,
      name: "Isometric Tech",
      prompt:
        "Isometric shapes, angled cards, cool blues and purples, precise grid accents.",
      preview: () => (
        <div className="p-6 rounded-xl border border-indigo-300/40 text-indigo-900 bg-gradient-to-br from-indigo-50 to-purple-100">
          <div className="text-xs tracking-widest text-indigo-600">ISO</div>
          <div className="text-3xl font-bold">Isometric</div>
          <div className="mt-1 opacity-80">Angles • Depth • Grid</div>
        </div>
      ),
    },
    {
      id: 59,
      name: "Paper Cut Collage",
      prompt:
        "Layered paper cutouts, torn edges, bold shapes, handmade collage feel.",
      preview: () => (
        <div className="p-6 rounded-xl border border-zinc-300 text-zinc-900 bg-[conic-gradient(at_30%_40%,#fde68a,#fca5a5,#93c5fd,#a7f3d0,#fde68a)]">
          <div className="text-xs tracking-widest text-zinc-700">CUTOUT</div>
          <div className="text-3xl font-bold">Collage</div>
          <div className="mt-1 opacity-80">Tear • Layer • Paste</div>
        </div>
      ),
    },
    {
      id: 60,
      name: "Noir Photography",
      prompt:
        "High-contrast B/W, large photography, thin rules, elegant sans-serifs.",
      preview: () => (
        <div className="p-6 rounded-xl bg-zinc-950 text-zinc-100 border border-zinc-800">
          <div className="text-xs tracking-widest text-zinc-400">NOIR</div>
          <div className="text-3xl font-bold">Shadows & Light</div>
          <div className="mt-1 text-zinc-400">Grain • Contrast • Mood</div>
        </div>
      ),
    },
    {
      id: 61,
      name: "Sakura Night",
      prompt:
        "Midnight indigo with luminous pink sakura accents, quiet glow, serene mood.",
      preview: () => (
        <div className="p-6 rounded-xl border border-pink-400/30 text-pink-100" style={{ background: "linear-gradient(180deg,#0b1020,#1a1030)" }}>
          <div className="text-xs tracking-widest text-pink-300">HANAMI</div>
          <div className="text-3xl font-bold">Night Blossom</div>
          <div className="mt-1 text-pink-200/80">Calm • Glow • Petal</div>
        </div>
      ),
    },
    {
      id: 62,
      name: "Pastel Dashboard",
      prompt:
        "Soft pastel dashboard UI, rounded charts, gentle shadows, calm data visuals.",
      preview: () => (
        <div className="p-6 rounded-xl bg-sky-50 text-sky-900 border border-sky-200">
          <div className="text-xs tracking-widest text-sky-600">DASH</div>
          <div className="text-3xl font-bold">Pastel Board</div>
          <div className="mt-1 opacity-80">Cards • Charts • Calm</div>
        </div>
      ),
    },
    {
      id: 63,
      name: "Solar Punk Eco",
      prompt:
        "Bright eco-futurism, greens/citrus hues, optimistic typography, clean energy motifs.",
      preview: () => (
        <div className="p-6 rounded-xl bg-gradient-to-br from-lime-100 to-emerald-100 text-emerald-900 border border-emerald-300/50">
          <div className="text-xs tracking-widest text-emerald-700">ECO</div>
          <div className="text-3xl font-extrabold">Solar Punk</div>
          <div className="mt-1">Bright • Clean • Future</div>
        </div>
      ),
    },
    {
      id: 64,
      name: "Arctic Ice Glass",
      prompt:
        "Icy glassmorphism, blue-white palette, frosted edges, crisp minimal elements.",
      preview: () => (
        <div className="p-6 rounded-xl glass border border-white/30 text-sky-100 bg-gradient-to-br from-sky-400/20 to-white/10">
          <div className="text-xs tracking-widest text-sky-200">ARCTIC</div>
          <div className="text-3xl font-bold">Ice Pane</div>
          <div className="mt-1 text-sky-100/80">Frost • Chill • Clear</div>
        </div>
      ),
    },
    {
      id: 65,
      name: "Terrarium Greens",
      prompt:
        "Fresh green palette, soft glass containers, subtle moisture/gloss, botanical vibe.",
      preview: () => (
        <div className="p-6 rounded-xl border border-emerald-300/40 text-emerald-900 bg-gradient-to-b from-emerald-50 to-emerald-100">
          <div className="text-xs tracking-widest text-emerald-700">TERRARIUM</div>
          <div className="text-3xl font-extrabold">Greenhouse</div>
          <div className="mt-1">Leaf • Dew • Dome</div>
        </div>
      ),
    },
    {
      id: 66,
      name: "Metallic Chrome",
      prompt:
        "High-gloss chrome accents, reflective gradients, sleek futuristic components.",
      preview: () => (
        <div className="p-6 rounded-xl text-zinc-100 border border-zinc-400/40" style={{ background: "linear-gradient(90deg,#0a0a0a,#2a2a2a 40%,#9ca3af 50%,#2a2a2a 60%,#0a0a0a)" }}>
          <div className="text-xs tracking-widest text-zinc-300">CHROME</div>
          <div className="text-3xl font-bold">Reflect</div>
          <div className="mt-1 text-zinc-300/80">Shine • Steel • Slick</div>
        </div>
      ),
    },
    {
      id: 67,
      name: "Organic Waves",
      prompt:
        "Fluid organic wave shapes, soft gradients, smooth motion, calming rhythm.",
      preview: () => (
        <div className="p-6 rounded-xl text-teal-900 border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-100">
          <div className="text-xs tracking-widest text-teal-600">FLOW</div>
          <div className="text-3xl font-bold">Waves</div>
          <div className="mt-1 opacity-80">Curve • Drift • Ease</div>
        </div>
      ),
    },
    {
      id: 68,
      name: "Minimal Poster Type",
      prompt:
        "Oversized typographic poster style, strict grid, stark spacing, few colors.",
      preview: () => (
        <div className="p-6 rounded-xl bg-white text-zinc-900 border border-zinc-200">
          <div className="text-xs tracking-widest text-zinc-400">POSTER</div>
          <div className="text-3xl font-extrabold">Type First</div>
          <div className="mt-1 text-zinc-500">Grid • Space • Scale</div>
        </div>
      ),
    },
    {
      id: 69,
      name: "Sunset Glass",
      prompt:
        "Warm sunset gradient with translucent glass cards and soft bloom highlights.",
      preview: () => (
        <div className="p-6 rounded-xl glass text-white border border-white/20" style={{ background: "linear-gradient(135deg,#fb7185,#f59e0b,#f472b6)" }}>
          <div className="text-xs tracking-widest text-white/80">DUSK</div>
          <div className="text-3xl font-bold">Sunset Glass</div>
          <div className="mt-1 text-white/80">Warm • Glow • Soft</div>
        </div>
      ),
    },
    {
      id: 70,
      name: "Matrix Code",
      prompt:
        "Digital rain vibes: black background, neon green mono, subtle scanlines, matrix feel.",
      preview: () => (
        <div className="p-6 rounded-xl terminal scanlines border border-emerald-400/30 font-mono">
          <div className="text-xs">MATRIX</div>
          <div className="text-3xl">Wake up, Neo.</div>
          <div className="mt-1">The Matrix has you…</div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      {/* Inline CSS for custom effects to preserve original aesthetics */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Playfair+Display:wght@600;700&family=Space+Mono:wght@400;700&display=swap');
        :root{--grid:14px}
        html,body{font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif}
        .ufo-float{animation: ufo 6s ease-in-out infinite}
        @keyframes ufo{0%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-8px) rotate(1deg)}100%{transform:translateY(0) rotate(-1deg)}}
        .scanlines{position:relative}
        .scanlines::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(transparent 0 2px, rgba(255,255,255,.03) 2px 3px);pointer-events:none}
        .glass{backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px)}
        .terminal{background:#000;color:#00ff7f;text-shadow:0 0 2px rgba(0,255,128,.6)}
        .y2k{background: radial-gradient(circle at 30% 10%, rgba(255,255,255,.35), transparent 35%), linear-gradient(120deg, #f0f 0%, #0ff 50%, #9cf 100%)}
        .starfield{background: radial-gradient(closest-side, rgba(255,255,255,.2), transparent 60%), #020617; position:relative; overflow:hidden}
        .starfield::before, .starfield::after{content:""; position:absolute; inset:-50%; background:radial-gradient(2px 2px at 20% 30%, #fff, transparent),radial-gradient(1px 1px at 70% 60%, #fff, transparent),radial-gradient(1.5px 1.5px at 40% 80%, #fff, transparent),radial-gradient(1px 1px at 85% 35%, #fff, transparent); opacity:.5; animation: drift 30s linear infinite}
        .starfield::after{opacity:.3; animation-duration:50s}
        @keyframes drift{to{transform:translateY(10%)}}
        .brutalist *{border:2px solid #000!important; border-radius:0!important}
        .retro90{background: linear-gradient(0deg,#fffa,#fffa), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 10 10"><rect width="10" height="10" fill="%23fefefe"/><path d="M0 10 L10 0 M-2 8 L2 12" stroke="%23e5e7eb" stroke-width="0.5"/></svg>')}
        .pattern{background-image: linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,.03) 1px, transparent 1px); background-size:20px 20px}
        .copy-toast{animation: pop .5s ease}
        @keyframes pop{0%{transform:translateY(4px);opacity:0}100%{transform:translateY(0);opacity:1}}
        .clip-path-beam{clip-path: polygon(50% 0, 100% 100%, 0 100%)}
      `}</style>

      {/* Floating UFO button */}
      <div className="fixed right-4 bottom-4 z-50 ufo-float">
        <button
          id="ufoButton"
          className="relative group"
          aria-label="Cosmic action"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="absolute -inset-3 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-cyan-500" />
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-emerald-300 to-cyan-400 flex items-center justify-center shadow-2xl border border-white/30">
            <svg viewBox="0 0 24 24" className="w-9 h-9 text-zinc-900 opacity-90" aria-hidden>
              <path
                fill="currentColor"
                d="M12 2.5c2.6 0 4.8 1.5 5.8 3.7 2.1.2 3.7 2 3.7 4.2 0 1.4-.7 2.7-1.8 3.5.1.4.1.8.1 1.1 0 3.5-2.9 6.3-6.3 6.3-1 0-2-.2-2.8-.6-.7.3-1.5.4-2.3.4-3.5 0-6.3-2.9-6.3-6.3 0-.7.1-1.4.3-2C1.5 12.1.8 10.9.8 9.6c0-2.2 1.7-4 3.8-4.2C5.6 3.3 8.6 2.5 12 2.5Zm0 3.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3S14.4 5.7 12 5.7Z"
              />
            </svg>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-14 w-28 h-28 bg-emerald-400/10 group-hover:bg-emerald-400/20 transition clip-path-beam blur-sm" />
        </button>
      </div>

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(56,189,248,.25),transparent),radial-gradient(800px_400px_at_20%_-10%,rgba(168,85,247,.25),transparent)]" />
        <div className="absolute inset-0 pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="flex items-center gap-3 text-emerald-300 text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Prompt Toolkit
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Vibe Coding Companion
            <span className="block text-zinc-400 font-semibold text-xl md:text-2xl mt-3">
              Website aesthetics you can paste after your master prompt for instant visual vibes.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-zinc-300">
            Copy a style modifier, attach it after your master prompt, and instantly flip the site’s vibe without touching functionality. Each card shows a true-to-style mini preview with a one-click copy.
          </p>

          {/* Master Prompt */}
          <div className="mt-8 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-xl font-bold">Your Master Prompt (plug in any style)</h2>
              <button
                onClick={() => copy(master)}
                className="px-3 py-1.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-emerald-300 text-sm"
              >
                Copy master
              </button>
            </div>
            <pre className="mt-3 whitespace-pre-wrap text-sm text-zinc-200">{master}</pre>
          </div>

          <div className="mt-6 text-zinc-400 text-sm">
            Tip: Replace &lt;TECH_STACK&gt; (e.g., "Next.js + Tailwind") and swap <span className="text-zinc-200">{`{STYLE}`}</span> with any card below.
          </div>
        </div>
      </header>

      {/* Styles Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((s) => (
            <article key={s.id} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 flex flex-col gap-4">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-zinc-400">Style</div>
                  <h3 className="text-lg font-bold">{s.name}</h3>
                </div>
              </header>
              <div className="rounded-xl min-h-[120px] flex items-center justify-center overflow-hidden">
                {s.preview()}
              </div>
              <pre className="text-xs whitespace-pre-wrap text-zinc-300 bg-zinc-950/60 border border-white/10 rounded-lg p-3">
                {s.prompt}
              </pre>
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => copy(s.prompt)}
                  className="copy px-3 py-1.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-emerald-300 text-sm"
                >
                  Copy style
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Toast */}
      <div
        id="toast"
        className={`fixed left-1/2 -translate-x-1/2 bottom-24 ${toast ? "" : "hidden"} px-4 py-2 bg-emerald-500 text-emerald-950 rounded-full font-semibold shadow-lg copy-toast`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </div>
  );
};



