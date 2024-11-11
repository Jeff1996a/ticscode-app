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
      <div className="relative w-full flex sm:mt-60 md:mt-36 h-screen content-center items-center justify-center pt-10 pb-32">
        <Card className="w-2/4 border border-green-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardHeader
                  variant="gradient"
                  color="white"
                  className="mb-1 mt-20 grid h-28 place-items-center border border-green-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Typography variant="h3" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Image
                            className="h-100 w-100 mt-0 mb-0 mx-auto object-cover object-center opacity-90"
                            src="/img/logo-no-background.png"
                            width={250}
                            height={250}
                            alt="logo image"/>
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-2 sm:w-full overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Typography
                          as="a"
                          href="#signup"
                          variant="h4"
                          color="green"
                          className="ml-1 font-bold text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                Crear cuenta
              </Typography>
              <form className="mt-2 mb-1 w-full sm:w-full">
                <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-2 md:grid-cols-2">
                  <Input label="Nombres" size="lg" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                  <Input label="Apellidos" size="lg" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                  <div className="md:col-span-2 w-full">
                    <Input  label="Email" size="lg" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                  </div>
                  <Input type="password" label="Contraseña" size="lg" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                  <Input type="password" label="Repetir contraseña" size="lg" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                  <div className="md:col-span-1">
                    
                    <div className="mt-0">
                    <label className="block text-sm text-blue-gray-800 ml-1">
                        Pais
                    </label>
                    <select
                          className="w-full bg-transparent placeholder:text-gray-400 text-blue-gray-500 text-sm border border-blue-gray-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                          <option value="brazil">Brazil</option>
                          <option value="bucharest">Bucharest</option>
                          <option value="london">London</option>
                          <option value="washington">Washington</option>
                      </select>
                    
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    
                    <div className="mt-0">
                    <label className="block text-sm text-blue-gray-800 ml-1">
                        Ciudad/Provincia
                    </label>
                    <select
                          className="w-full bg-transparent placeholder:text-gray-400 text-blue-gray-500 text-sm border border-blue-gray-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                          <option value="brazil">Brazil</option>
                          <option value="bucharest">Bucharest</option>
                          <option value="london">London</option>
                          <option value="washington">Washington</option>
                      </select>
                    
                    </div>
                  </div>
                  <div className="md:col-span-2 w-full">
                    <Input  label="Dirección" size="lg" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
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