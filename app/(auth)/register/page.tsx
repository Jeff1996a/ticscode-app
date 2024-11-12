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
      <div className="relative w-full flex h-screen content-center items-center justify-center">
        <Card className="w-96 border border-green-500 md:w-2/4 content-center items-center " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardHeader
                  variant="gradient"
                  color="white"
                  className="sm:w-1/2 w-1/2 grid h-28 place-items-center border border-green-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Typography variant="h3" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Image
                            className="h-100 w-100 mt-0 mb-0 mx-auto object-cover object-center opacity-90"
                            src="/img/logo-no-background.png"
                            width={250}
                            height={250}
                            alt="logo image"/>
            </Typography>
          </CardHeader>
          <CardBody className="relative flex flex-col gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Typography
                          as="a"
                          href="#signup"
                          variant="h4"
                          color="green"
                          className="ml-1 font-bold text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                Crear cuenta
            </Typography>
            <form className="gap-2 md:grid md:grid-cols-2">
              <div className="mt-2">
                <Input label="Nombres" size="md" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
              </div>
              <div className="mt-2">
                <Input label="Apellidos" size="md" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
              </div>
              <div className="mt-2">
                <Input type="number" label="Teléfono" size="md" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
              </div>
              <div className="mt-2">
                <Input type="date" label="Fecha de nacimiento" size="md" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />       
              </div>
              <div className="md:col-span-2 mt-2" >
                <Input label="Email" size="md" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
              </div>
              <div className="mt-2">
                <Input  type="password" label="Contraseña" size="md" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
              </div>
              <div className="mt-2">
                <Input type="password" label="Repetir contraseña" size="md" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
              </div>
            </form>
            
            <div className="-ml-3">
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
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Button variant="gradient" color="green" fullWidth placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Registrarse
            </Button>
            <Typography variant="small" className="mt-2 flex justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Don&apos;t have an account?
              <Typography
                          as="a"
                          href="/register"
                          variant="small"
                          color="green"
                          className="ml-1 font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      
    );
  }