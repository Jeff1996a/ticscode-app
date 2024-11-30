'use client';
import { Footer } from '../../components/ui/footer/footer';
import ContactForm from '../../components/forms/contact-form';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function Contactos() {
  
  return (
    <>
      <div className="absolute top-0 h-full w-full bg-cover bg-center opacity-90"> 
        <article>
          <section className="mx-auto px-8 py-20 lg:py-28 bg-gray-50">
            <ContactForm></ContactForm> 
          </section>
        </article>
        <div className="bg-gray">
            <Footer />
        </div>
      </div>
      <FloatingWhatsApp 
          phoneNumber="5930979112697" 
          accountName="TicsCode Ecuador" 
          statusMessage="Soluciones tecnológicas"
          chatMessage="¡Bienvenid@! ¿Cómo podemos ayudarte?"
          placeholder="Escríbenos un mensaje"/>
    </>
  );
}