'use client';
import Navbar from "./components/Navbar";
import "./globals.css";
import ClickSpark from "./components/ClickSpark";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
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
      </body>
    </html>
  );
}
