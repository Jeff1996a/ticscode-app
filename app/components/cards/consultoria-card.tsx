'use client';

import { WindowIcon } from '@heroicons/react/16/solid';
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import Image from  "next/image";

interface ConsultoriaCardPropsType {
    img: string;
    title: string;
    desc: string;
}

export default function ConsultoriaCard({ img, title, desc }: ConsultoriaCardPropsType){
    return (
        <>
            <Card
          className="relative grid min-h-[25rem] items-end overflow-hidden rounded-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ... "
          color="transparent">
                <img
                    src={img}
                    alt="bg"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/70" />
                <CardBody className="relative flex flex-col justify-end">
                    <Typography variant="h4" color="white">
                    {title}
                    </Typography>
                    <Typography
                    variant="paragraph"
                    color="white"
                    className="my-5 font-normal"
                    >
                    {desc}
                    </Typography>
                </CardBody>
            </Card>
        </>
      );
}
