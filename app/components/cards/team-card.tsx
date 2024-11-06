'use client';
import { Card, Avatar, Typography } from "@material-tailwind/react";
interface TeamCardPropsType {
  img: string;
  name: string;

}
export function TeamCard({ img, name}:TeamCardPropsType) {
  return (
    <Card color="transparent" shadow={false} className="text-center" placeholder="" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <Avatar
        src={img}
        alt={name}
        className=" w-full h-full shadow-lg shadow-green-500/25" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      />
      
    </Card>
  );
}