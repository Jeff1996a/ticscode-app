'use client';

import { BuildingStorefrontIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, WindowIcon } from '@heroicons/react/16/solid';
import { Button, Card, CardBody, CardHeader, Input, List, ListItem, Textarea, Typography } from '@material-tailwind/react';
import Image from  "next/image";
import ConsultoriaCard from '../components/cards/consultoria-card';
import AppsCard from '../components/cards/apps-card';
import { Footer } from '../components/ui/footer/footer';
import { FaAppStore, FaClipboardList, FaRegEdit, FaRegUser, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineDevicesOther, MdOutlineEmail, MdOutlineListAlt } from 'react-icons/md';
import { IoLogoTux } from 'react-icons/io';
import { IoCartOutline, IoHomeOutline, IoShareSocialOutline } from 'react-icons/io5';
import { TbWorldWww } from 'react-icons/tb';
import { CiCreditCard1 } from 'react-icons/ci';
import { FiDatabase } from 'react-icons/fi';
import { AiOutlineAndroid } from 'react-icons/ai';
import { RiRobot2Line } from 'react-icons/ri';
import { PageTitle } from '../components/page-title';
import ContactForm from '../components/forms/contact-form';

const contents = [
  {
    img: "https://impulsapopular.com/wp-content/uploads/2014/06/iStock_86351731_LARGE.jpg",
    title: "Sitio web básico",
    desc: "Sitio web con un diseño básico. Ideal para empresas u organizaciones que deseen dar a conocer sus productos o servicios en internet.",
  },
  {
    img: "https://ecommercefactory.co/wp-content/uploads/2021/01/Full-E-commercejpg-scaled.jpg",
    title: "E-Commerce",
    desc: "Esta opción permite implementar su propia tienda en linea, conectar todas sus redes sociales e implementar un sistema de pagos online.",
  },
  {
    img: "https://designcodesolutions.com/wp-content/uploads/2019/08/top-view-dark-laptop-background-template-ok-1024x860.png",
    title: "Aplicación web",
    desc: "Nuestro paquete corporativo es ideal para implementar una solución tecnológica que se adapte a su modelo de negocio",
  },
  

  {
    img: "https://www.laprensagrafica.com/__export/1661038895122/sites/prensagrafica/img/2022/08/20/redes_sociales_1.jpg_554688467.jpg",
    title: "Aplicación  móvil",
    desc: "Si desea ofrecer experiencias personalizadas e intuitivas a sus cliente en un dispositivo móvil esta opción es la indicada. ",
  },
];

const app_contents = [
  {
    img: "https://impulsapopular.com/wp-content/uploads/2014/06/iStock_86351731_LARGE.jpg",
    title: "Sitio web básico",
    desc: "Sitio web con un diseño básico. Ideal para empresas u organizaciones que deseen dar a conocer sus productos o servicios en internet.",
 
    items: [
      {icon: <FaWhatsapp/>, title: "Botón de contacto a WhatsApp"},
      {icon: <MdOutlineListAlt />, title: "Catálogo de productos o servicios"},
      {icon: <MdOutlineDevicesOther />, title: "Diseño responsive adaptable a cualquier pantalla"},
      {icon: <IoLogoTux />, title: "Gestión de marca y diseño publicitario"},
      {icon: <IoShareSocialOutline />, title: "Enlazamos su sitio web con todas sus redes sociales"},
      {icon: <MdOutlineEmail />, title: "Formulario para recibir mensajes desde su sitio web"},
      {icon: <TbWorldWww />, title: "Hosting y dominio por 1 año"},
      {icon: <IoHomeOutline />, title: "Página de inicio o bienvenida"},
    ],
    idApp:"sitioWeb",
    price: 250
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLgWg5K7M_M7VcRMW0MbMM5SBzOQlt3Cokg&s",
    title: "E-Commerce",
    desc: "Esta opción permite implementar su propia tienda en linea, conectar todas sus redes sociales e implementar un sistema de pagos online.",
    icon: <BuildingStorefrontIcon color='red' className="h-6 w-6 text-light-red-500 animate-bounce"/>,
    items:  [
      {icon: <FaWhatsapp/>, title: "Botón de contacto a WhatsApp"},
      {icon: <IoCartOutline />, title: "Carro de compras"},
      {icon: <FaRegUser />, title: "Control de usuarios"},
      {icon: <MdOutlineDevicesOther />, title: "Diseño responsive adaptable a cualquier pantalla"},
      {icon: <IoShareSocialOutline />, title: "Enlazamos su sitio web con todas sus redes sociales"},
      {icon: <MdOutlineEmail />, title: "Formulario para recibir mensajes desde su sitio web"},
      {icon: <IoLogoTux />, title: "Gestión de marca y diseño publicitario"},
      {icon: <TbWorldWww />, title: "Hosting y dominio por 1 año"},
      {icon: <CiCreditCard1 />, title: "Sistema de pagos en línea"},
      {icon: <FiDatabase />, title: "Una base de datos"},
      ],
    idApp:"ecommerce",
    price:450
  },
  {
    img: "https://designcodesolutions.com/wp-content/uploads/2019/08/top-view-dark-laptop-background-template-ok-1024x860.png",
    title: "Aplicación web",
    desc: "Nuestro paquete corporativo es ideal para implementar una solución tecnológica que se adapte a su modelo de negocio",
    icon: <ComputerDesktopIcon color='green' className="h-6 w-6 text-light-green-500 animate-bounce"/>,
    items: [
      {icon: <FaWhatsapp/>, title: "Botón de contacto a WhatsApp"},
      {icon: <FaRegUser />, title: "Control de usuarios"},
      {icon: <FaRegEdit />, title: "Diseño personalizado de acuerdo al modelo de negocio"},
      {icon: <MdOutlineDevicesOther />, title: "Diseño responsive adaptable a cualquier pantalla"},
      {icon: <IoShareSocialOutline />, title: "Enlazamos su sitio web con todas sus redes sociales"},
      {icon: <MdOutlineEmail />, title: "Formulario para recibir mensajes desde su sitio web"},
      {icon: <IoLogoTux />, title: "Gestión de marca y diseño publicitario"},
      {icon: <TbWorldWww />, title: "Hosting y dominio por 1 año"},
      {icon: <FiDatabase />, title: "Una base de datos"},
    ],
    idApp:"appWeb",
    price:600
  },
  

  {
    img: "https://www.laprensagrafica.com/__export/1661038895122/sites/prensagrafica/img/2022/08/20/redes_sociales_1.jpg_554688467.jpg",
    title: "Aplicación  móvil",
    desc: "Si desea ofrecer experiencias personalizadas e intuitivas a sus cliente en un dispositivo móvil esta opción es la indicada. ",
    icon: <DevicePhoneMobileIcon color='purple' className="h-6 w-6 text-light-purple-500 animate-bounce"/>,
    items: [
      {icon: <AiOutlineAndroid />, title: "Diseño multiplataforma"},
      {icon: <FaRegUser />, title: "Control de usuarios"},
      {icon: <RiRobot2Line />, title: "Chatbot de ayuda"},
      {icon: <FaRegEdit />, title: "Diseño personalizado de acuerdo al modelo de negocio"},
      {icon: <IoShareSocialOutline />, title: "Enlazamos su aplicación con todas las redes sociales"},
      {icon: <MdOutlineEmail />, title: "Formulario para recibir mensajes desde su aplicación"},
      {icon: <FaAppStore />, title: "Gestión de tiendas digitales como PlayStore y AppStore"},
      {icon: <IoLogoTux />, title: "Gestión de marca y diseño publicitario"},
      {icon: <TbWorldWww />, title: "Hosting y dominio por 1 año"},
      {icon: <FiDatabase />, title: "Una base de datos"},
      ],
    idApp:"appMovil",
    price: 800
  },
];

export default function Consultoria() {
  return (
    <>
      <div className="absolute top-0 h-full w-full bg-cover bg-center opacity-90">
        <article>
          <section className="mx-auto px-8 py-20 lg:py-28 bg-gray-50">
              <Typography
                variant="h1"
                color="light-green"
                className="!text-5xl !leading-snug lg:!text-5xl text-center">
                Conoce nuestros paquetes TicsCode
              </Typography>
              <Typography
                variant="lead"
                className="mt-2 w-full !font-normal !text-blue-gray-500 text-center">
                Ofrecemos diversos planes de desarrollo web y móvil para cualquier organización o empresa. 
                Nuestro equipos de desarrollo se encarga de diseñar las mejores soluciones de software para que se adapten a todas las necesidades de sus negocio.

              </Typography>

              <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-4">
                {contents.map(({ img, title, desc }) => (
                  <ConsultoriaCard key={title} img={img} title={title} desc={desc} />
                ))}
              </div>
          </section>
          <section className=' bg-gray-50 px-4 pb-20 pt-1'>
            <Typography
                  variant="h1"
                  color="light-green"
                  className="!text-5xl !leading-snug lg:!text-5xl text-center mb-20 ">
                  Paquetes TicsCode
            </Typography>
            <div className='w-full'>
            {app_contents.map(({img, title, desc, icon,items,idApp, price}) =>(
              <AppsCard key={title} img={img} title={title} desc={desc} idApp={idApp} icon={icon} items={items} 
              price={price}></AppsCard>
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