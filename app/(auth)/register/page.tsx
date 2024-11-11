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
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                  <div className="mt-2">
                    <Input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                  <div className="mt-2">
                    <Input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
                  </div>
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