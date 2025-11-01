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
      <body cz-shortcut-listen="true">
     { /*  <ClickSpark
           sparkColor='#ee7100'
           sparkSize={10}
           sparkRadius={15}
           sparkCount={8}
           duration={400}
         >
          */}
      
         <div className="con">
                <Navbar />
                {children}
           </div>
      
         { /* </ClickSpark> */}
         </body>
    </html>
  );
}
