// app/layout.tsx
export const metadata = {
  title: "Vibe Coding Companion — Style Switcher",
  description:
    "Website aesthetics you can paste after your master prompt for instant visual vibes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Playfair+Display:wght@600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-zinc-950 text-zinc-100 min-h-screen">
        <link rel="stylesheet" href="/globals.css" />
        {children}
      </body>
    </html>
  );
}
