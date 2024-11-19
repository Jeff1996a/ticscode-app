import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import {
    StarIcon,
    PresentationChartLineIcon,
    RocketLaunchIcon,
    ComputerDesktopIcon,
    BuildingStorefrontIcon,
    NewspaperIcon,
    WindowIcon,
  } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

interface ContactTypes {
  idContact:number;
  title: string;
  icon: any;
  color: any;
  price:any;
  description: string[];
  button:any;
}
  
export const contactData : ContactTypes[] = [
    {
      idContact: 1,
      title: "Sitio web básico",
      icon: WindowIcon,
      color: "blue",
      price: <p>250 $</p>,
      description: [
        "Botón de WhatsApp",
        "Catálogo de productos",
        "Diseño responsive",
        "Diseño publicitario", 
        "Enlaces a redes sociales",
        "Formulario de contacto",
        "Hosting y dominio por 1 año",
        "Página de bienvenida"
        
      ],
      button : (
        <Button className="object-bottom   transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 ..." placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <Link href="/home/consultoria/#sitioWeb">Conocer más</Link> </Button>
      )  
    },
    {
      idContact: 2,
      title: "E-commerce",
      color: "red",
      icon: BuildingStorefrontIcon,
      price: "450 $",
      description: [
        "Botón de WhatsApp",
        "Carro de compras",
        "Control de  usuarios", 
        "Diseño personalizado",
        "Diseño publicitario",
        "Enlaces a redes sociales",
        "Hosting y dominio por 1 año",
        "1 Base de datos",
        ],
      button : (
        <Button color="green" className=" bottom-0 object-bottom  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 ..." placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <a href="/home/consultoria/#ecommerce">Conocer más </a></Button>
      )
    },
    {
      idContact: 3,
      title: "Sitio web corporativo",
      icon: ComputerDesktopIcon,
      color: "green",
      price: "600 $",
      description: [
        "Botón de WhatsApp",
        "Control de usuarios",
        "Diseño personalizado",
        "Diseño publicitario", 
        "Enlaces a redes sociales",
        "Formulario de contacto",
        "Hosting y dominio por 1 año",
        "1 Base de datos"
      ],
      button : (
        <Button  className="object-bottom bottom-0 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 ..." placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <a href="/home/consultoria/#appWeb">Conocer más</a> </Button>
      )
    },
    
    {
      idContact:4 ,
      title: "Aplicación móvil",
      color: "purple",
      icon: DevicePhoneMobileIcon,
      price: "800 $",
      description: [
        "Aplicación multiplataforma",
        "ChatBot de ayuda",
        "Gestión de tiendas digitales",
        "Control de usuarios",
        "Diseño personalizado",
        "Diseño publicitario",
        "Hosting y dominio por 1 año",
        "1 Base de datos",
        ],
      button : (
        <Button color="green" className="object-bottom  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 ..." placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <a href="/home/consultoria/#appMovil">Conocer más </a></Button>
      )
    },
    
  ];