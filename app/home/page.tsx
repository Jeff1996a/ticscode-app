'use client';
import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    List,
    ListItem
} from "@material-tailwind/react";
import { HandRaisedIcon} from "@heroicons/react/24/solid";
import { PageTitle} from "@/app/components/page-title";
import { FeatureCard} from "@/app/components/cards/feacture-card";
import Image from  "next/image";
import { featuresData } from "@/app/utils/feacture-data";
import { contactData } from "@/app/utils/contact-data";
import { teamData } from "@/app/utils/team-data";
import { TeamCard } from "@/app/components/cards/team-card";
import { Footer } from "@/app/components/ui/footer/footer";
import { CarouselWithContent} from "@/app/components/carousel/index-carousel"
import ContactForm from "../components/forms/contact-form";

export default function Index(){
    return(
        <>
            <div className="relative w-full flex h-screen content-center items-center justify-center pt-16 pb-32">
            <CarouselWithContent></CarouselWithContent>
            </div>
            <section id="bienvenida" className="-mt-33 bg-gray-50 px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="mt-32 flex flex-wrap items-center">
                        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                            <HandRaisedIcon className="h-6 w-6 text-light-green-500 animate-bounce" />
                        </div>
                        <Typography
                                variant="h2"
                                className="mb-3 font-bold"
                                color="green" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            ¡Bienvenidos a TicsCode!
                        </Typography>
                        <Typography className="mb-8 font-normal text-blue-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Es el lugar indicado para dar el siguiente paso hacia las nuevas tecnologías y formar parte de la nueva revolución digital.
                            <br />
                            <br />
                            Ayudamos a desarrollar todas las ideas para su negocio, emprendimiento u organización haciendo uso de las nuevas tecnologías de la información.
                        </Typography>
                        </div>
                        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                        <Card className="shadow-lg shadow-gray-500/10" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <CardHeader className="relative h-56" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <Image
                                alt="Card Image"
                                src="/img/teamwork.jpeg"
                                width={500}
                                height={500}
                                className="h-full w-full"
                            />
                            </CardHeader>
                            <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-3 font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            >
                                ¿Quienes somos?
                            </Typography>
                            <Typography className="font-normal text-blue-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                TicsCode Ecuador es una empresa que se especializa en brindar soluciones en el área de las Tecnologías de la información a diferentes empresas y organizaciones.
                            </Typography>
                            
                            </CardBody>
                            <a href="#correosClientes" className="text-center  ">
                            <Button
                                        variant="outlined"
                                        color="light-green"
                                        size="sm"
                                        className="hidden sm:inline-block mb-10" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                >
                                <span>Contáctanos</span>
                                </Button>
                            </a>
                        </Card>
                        </div>
                    </div>
                    <div className="container mx-auto mt-20 pt-20">
                        <PageTitle heading="Nuestros servicios" hijo={""} >
                            
                        </PageTitle>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {featuresData.map(({ color, title, icon, description }) => (
                            <FeatureCard
                                key={title}
                                color={color}
                                title={title}
                                icon={React.createElement(icon, {
                                className: "w-5 h-5 text-white",
                                })}
                                description={description}
                            />
                            ))}
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="px-4 bg-gray-50 pt-20 pb-48">
                <div className="container mx-auto">
                    <PageTitle heading="Nuestros proveedores" hijo={"Trabajamos con diferentes marcas para brindar la mejor solución a todos nuestros clientes."}>
                        
                    </PageTitle>
                    <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                        {teamData.map(({ img, name, position, socials }) => (
                        <TeamCard
                            key={name}
                            img={img}
                            name={name}
                        />
                        ))}
                    </div>
                </div>
            </section>
            <section id="paquetesTicscode"  className="px-4 bg-gray-50">
               <div className="container mx-auto">
                    <PageTitle heading="Paquetes TicsCode" hijo={"Nuestros planes de desarrollo web incluyen varios paquetes para que pueda seleccionar el sitio web que más se ajuste a sus necesidades."}>
                        
                    </PageTitle>
                    <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
                        {contactData.map(({ title, icon, color, price, description, button}) => (
                        <Card
                                key={title}
                                color="transparent"
                                shadow={false}
                                className="text-center text-blue-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                            
                            <IconButton
                                        variant="gradient"
                                        size="lg"
                                        className="pointer-events-none mb-6 rounded-full animate-bounce" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            >
                                {React.createElement(icon, {
                                className: "w-5 h-5"
                            })}
                            </IconButton>
                            </div>
                            <Typography variant="h5" color="blue" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            {title}
                            </Typography>
                            <Typography variant="h6" className="font-normal text-blue-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Desde
                            </Typography>
                            <Typography color="green" variant="h1" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            {price}
                            </Typography>
                            
                            <List className="text-center mt-5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                {description.map((name) => (
                                <ListItem key={name} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{name}</ListItem>
                                ))}
                            </List>
                            {button}
                        </Card>
                        ))}
                    </div>
                    <ContactForm></ContactForm>
                </div>
                
            </section>
            <div className="bg-gray">
                <Footer />
            </div>
        </>
        
    )
}