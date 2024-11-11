'use client';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import Image from "next/image";
   
  export default function RegisterCard() {
    return (
      <div className="relative w-full flex h-screen content-center items-center justify-center pt-16 pb-32">
        <Card className="w-96 border border-green-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardHeader
                  variant="gradient"
                  color="white"
                  className="mb-2 grid h-28 place-items-center border border-green-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Typography variant="h3" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Image
                            className="h-100 w-100 mt-0 mb-0 mx-auto object-cover object-center opacity-90"
                            src="/img/logo-no-background.png"
                            width={250}
                            height={250}
                            alt="logo image"/>
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Typography
                          as="a"
                          href="#signup"
                          variant="h4"
                          color="green"
                          className="ml-1 font-bold text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                Crear cuenta
              </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:cols-span-3 w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-600">
                    Nombres
                  </label>
                  <input type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
                </div>
              </div>
              <Checkbox
                label={<Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>}
                containerProps={{ className: "-ml-2.5" }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
            </form>
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Button variant="gradient" color="green" fullWidth placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Registrarse
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
               Already have an account?{" "}
              <Typography
                              as="a"
                              href="/register"
                              variant="small"
                              color="green"
                              className="ml-1 font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                    Sign in
                  </Typography>
            </Typography>
                
          </CardFooter>
        </Card>
      </div>
      
    );
  }