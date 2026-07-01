'use client';
import Navbar from "./components/Navbar";
import "./globals.css";
import ClickSpark from "./components/ClickSpark";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isPresentPage = pathname === '/present';

  return (
    <html lang="en">
      <head>
        <title>Swayam Gode - Portfolio</title>
        <meta name="description" content="Swayam Gode - Web Developer | Data Analyst | Tech Enthusiast" />
      </head>
      <body className="antialiased bg-black text-white">
        {isPresentPage ? (
          <main className="h-screen w-screen overflow-hidden bg-black text-white">
            {children}
          </main>
        ) : (
          <ClickSpark
            sparkColor='#ffffff'
            sparkSize={10}
            sparkRadius={18}
            sparkCount={8}
            duration={400}
          >
            <Navbar />
            <main className="pt-14">
              {children}
            </main>
          </ClickSpark>
        )}
      </body>
    </html>
  );
}
