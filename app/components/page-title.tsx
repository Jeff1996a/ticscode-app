"use client;"
import { Typography } from "@material-tailwind/react";
interface PageTitlePropsType {
  heading: string;
  hijo: string;
}
export function PageTitle({heading, hijo } : PageTitlePropsType ) {
  return (
    <div   className="mx-auto w-full px-4 text-center lg:w-6/12 ">
      <Typography variant="h2" color="green" className="mb-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {hijo}
      </Typography>
    </div>
  );
}