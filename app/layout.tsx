import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ComplexNavbar} from '@/app/components/ui/navbar/navbar';
import { FloatingWhatsApp } from "react-floating-whatsapp";


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
        <nav className="fixed w-full z-20 top-0 left-0 mt-2 px-4">
          <ComplexNavbar></ComplexNavbar>
        </nav>
        <div className={inter.className}>{children}</div>
       
      </body>
      <FloatingWhatsApp 
          phoneNumber="5930979112697" 
          accountName="TicsCode Ecuador" 
          statusMessage="Soluciones tecnológicas"
          chatMessage="¡Bienvenid@! ¿Cómo podemos ayudarte?"
          placeholder="Escríbenos un mensaje"/>
    </html>
  );
}
