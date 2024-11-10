import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TicsCode Ecuador",
  description: "Soluciones en desarollo y Tecnologías de la información",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className={inter.className}>
        <div className={inter.className}>{children}</div>
      </body>
      
    </html>
  );
}
