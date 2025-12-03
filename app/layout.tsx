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
      <body className="bg-black text-white antialiased selection:bg-accent selection:text-white">
        <ClickSpark
          sparkColor='#ff5733'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </ClickSpark>
      </body>
    </html>
  );
}
