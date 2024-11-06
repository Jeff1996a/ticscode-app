'use client';
import Image from "next/image";
import { inter } from '@/app/components/ui/font';
import { Button } from "@material-tailwind/react";
import Index from "@/app/home/page"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
export default function Home() {
  return (
    <>
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
