import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibe Coding Companion — Style Switcher",
  description: "Website aesthetics you can paste after your master prompt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
