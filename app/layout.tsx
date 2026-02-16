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
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
        {isPresentPage ? (
          <main className="h-screen w-screen overflow-hidden bg-black text-white">
            {children}
          </main>
        ) : (
          <ClickSpark
            sparkColor='#6366f1'
            sparkSize={12}
            sparkRadius={20}
            sparkCount={10}
            duration={500}
          >
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
          </ClickSpark>
        )}
      </body>
    </html>
  );
}
