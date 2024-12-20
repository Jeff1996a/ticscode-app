'use client';
import { Typography } from '@material-tailwind/react';
import ServiciosCard from '../../components/cards/servicios-card';
import { Footer } from '../../components/ui/footer/footer';
import ContactForm from '../../components/forms/contact-form';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
interface ServiciosTypes {
  img:string;
  title: string;
  subtitle: string;
  desc: string[];
}

export default function Servicio() {
  const data : ServiciosTypes[]  = [
    {
        img:
        "/img/servicios1.png",
        title: "Hosting y alojamiento web",
        subtitle:"Presencia en internet por medio de nuestros servicios",
        desc: ["Gestión de dominios", "Configuración de servidores web", "Configuración de servidor de aplicaciones","Configuración de servidor de correos",
          "Trabajamos con distintas infraestructuras como SaaS, PaaS o IaaS"
        ]
    },
    {
        img:
        "/img/servicios2.png",
        title: "Cableado estructurado",
        subtitle:"Diseño e instalación de redes de computo.",
        desc: ["Diseño y configuración de redes LAN", "Seguridad en redes e internet", "Segmentación de red",
          "Enrutamiento y canalización de cableado", "Instalación y configuración de puntos de acceso"
        ]
    },
    {
      img:
      "/img/servicios3.png",
      title: "Reparación y mantenimiento",
      subtitle:"Soporte técnico.",
      desc: ["Configuración y mantenimiento de equipos de computo.","Instalación y configuración de Software", "Paquetes de mantenimiento para organizaciones y empresas"
      ]
    },
    {
        img:
        "/img/servicios4.png",
        title: "Asistencia y soporte remoto",
        subtitle:"Contamos con asistencia remota 24/7.",
        desc: ["Disponibilidad inmediata", "Asistencia remota en todos nuestros paquetes TicsCode","5 Cupones de asistencia gratuita en nuestros paquetes TicsCode",]
    },
    
  ];
  return (
    <>
      <div className="absolute top-0 h-full w-full bg-cover bg-center opacity-90"> 
       <article>
          <section  className="mx-auto px-8 py-20 lg:py-28 bg-gray-50">
            <Typography
              variant="h1"
              color="light-green"
              className="!text-5xl !leading-snug lg:!text-5xl text-center mb-10" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Servicios TicsCode
             </Typography>
             <Typography
              variant="lead"
              className="mt-2 w-full !font-normal !text-blue-gray-500 text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Contamos con un equipo de profesionales para brindar soluciones  en el área de cloud computing, alojamiento web,
                diseño y administración de redes de computo, reparación de computadoras y soporte técnico 24/7 incluído en todos nuestros planes.
              </Typography>

             <div className='w-ful mt-10'>
                {data.map(({img, title, desc,subtitle}) =>(
                  <ServiciosCard key={title} img={img} title={title} subtitle={subtitle} desc={desc}
                  ></ServiciosCard>
                ))}
             </div>
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