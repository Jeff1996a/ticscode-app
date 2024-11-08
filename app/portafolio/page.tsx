'use client';
import {Typography } from '@material-tailwind/react';
import Image from 'next/image';
import { Footer } from '../components/ui/footer/footer';
import ContactForm from '../components/forms/contact-form';

export default function Portafolio() {
  const data = [
    {
      imageLink:
        "/img/EMS.png",
    },
    {
      imageLink:
        "/img/Azul.png",
    },
    
    
  ];
  return (
    <>
      <div className="absolute top-0 h-full w-full bg-cover bg-center opacity-90"> 
        <article>
          <section className="mx-auto px-8 py-20 lg:py-28 bg-gray-50">
          <Typography
              variant="h1"
              color="light-green"
              className="!text-5xl !leading-snug lg:!text-5xl text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Nuestros clientes
            </Typography>
            <Typography
              variant="lead"
              className="mt-2 w-full !font-normal !text-blue-gray-500 text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Conoce todos los proyectos realizados por nuestro equipo de profesionales TicsCode
              </Typography>
            <div className="grid mt-4 mb-4 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map(({ imageLink }, index) => (
              <div key={index}>
                <Image
                  className="h-48 w-full max-w-full rounded-lg object-cover object-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover: duration-300 ..."
                  src={imageLink}
                  alt="gallery-photo"
                />
              </div>
            ))}
            </div>
            <ContactForm></ContactForm>
          </section>
        </article>
        <div className="bg-gray">
            <Footer />
        </div>
      </div>
    </>
  );
}