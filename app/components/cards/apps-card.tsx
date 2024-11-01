
'use client';

import { WindowIcon } from '@heroicons/react/16/solid';
import { Button, Card, CardBody, CardHeader, Typography, List, ListItem, ListItemPrefix } from '@material-tailwind/react';
import Image from  "next/image";
import { IconType } from 'react-icons';
import { FaCheck } from 'react-icons/fa';

interface AppsCardPropsType {
    img: string;
    title: string;
    desc: string;
    color: string;
    icon: IconType;
    idApp: string;
    price: number;
    items: any[];
}

export default function AppsCard({ img, title, desc, icon, items, idApp, price}: AppsCardPropsType){
    return (
        <>
            <section id={idApp} className=' bg-gray-50  pb-20 pt-1 '>
                <div className='container mx-auto'>
                  <div className='mt-2 flex flex-wrap items-center'>
                    <div className='mx-auto -mt-8 w-full  md:w-5/12'>
                     
                      <Typography
                        variant="h2"
                        className="font-bold animate-bounce"
                        color="green">
                        {title}
                      </Typography>
                      <Typography
                        variant="h5"
                        className="font-light ms-1 text-blue-gray-500">
                        Este paquete incluye las siguientes características:
                      </Typography>
                      <div>
                        <List className="text-center mt-2" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {items.map((name) => (
                                        
                                    <ListItem key={name.title}>
                                        <ListItemPrefix>
                                        {name.icon}
                                        </ListItemPrefix>{name.title}
                                    </ListItem>
                                    ))}
                        </List>
                      </div>
                        
                    </div> 
                    <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
                    <Card className="shadow-lg shadow-gray-500/10" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <CardHeader className="relative h-56">
                        <img
                            alt="Card Image"
                            src={img}
                            width={800}
                            height={800}
                            className="h-full w-full"
                        />
                        </CardHeader>
                        <CardBody>
                           <Typography
                            variant="small"
                            color="light-green"
                            className="font-normal uppercase text-center"
                            >
                            Desde
                            </Typography>
                            <Typography
                                variant="h3"
                                color="light-green"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                                >
                                <span className="mt-2 text-4xl animate-pulse">$</span>{price}{" "}
                                <span className="self-end text-2xl animate-pulse">+ i.v.a</span>
                            </Typography>
                            <Typography className="font-normal text-blue-gray-500">
                                {desc}
                            </Typography>
                        </CardBody>
                        <Button
                            variant="outlined"
                            color="green" 
                            size="sm"
                            className="hidden sm:inline-block mb-10 mx-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
                            >
                            <span>Contratar</span>
                        </Button>
                    </Card>
                    </div> 
                  </div>
                </div>
          </section>
        </>
      );
}
