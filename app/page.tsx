'use client';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Index from './home/page';
import { ComplexNavbar } from './components/ui/navbar/navbar';
export default function Home() {
  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0 mt-2 px-4">
          <ComplexNavbar></ComplexNavbar>
      </nav>
      <Index></Index>
      <FloatingWhatsApp 
          phoneNumber="5930979112697" 
          accountName="TicsCode Ecuador" 
          statusMessage="Soluciones tecnológicas"
          chatMessage="¡Bienvenid@! ¿Cómo podemos ayudarte?"
          placeholder="Escríbenos un mensaje"/>
    </>
  );
}
