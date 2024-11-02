import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from  "next/image";

export function CarouselWithContent() {
  return (
    <Carousel transition={{ duration: 2 }} className="absolute top-0 h-full w-full bg-cover bg-center opacity-90" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <div className="relative h-full w-full">
        <img
          src="https://sika.scene7.com/is/image/sika/glo-data-center-16:16-9?wid=1920&hei=1080&fit=crop%2C1"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
          <Typography
              variant="h1"
              color="light-green"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              TicsCode
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Especializados en crear las mejores soluciones IT para tu negocio mediante el desarrollo de aplicaciones, implementaciones de red y soporte técnico.
            </Typography>
            <div className="flex justify-center gap-2">
                <a href="#bienvenida">
                    <Button size="md" color="green" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Explorar
                    </Button>
                </a>
              
              <a href="https://github.com/Jeff1996a">
              <Button className="flex items-center gap-3" size="md" color="white" variant="text"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="22" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                GitHub
              </Button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/12/tes_gen_blog_code7-1-800x412.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="light-green"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Desarrollo web y móvil
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Contamos con profesionales para diseñar y desarrollar una aplicación que se ajuste a las necesidades de su negocio.
            </Typography>
            <div className="flex justify-center gap-2">
             <a href="/consultoria">
                <Button size="md" color="green" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Conocer más
                </Button>
             </a>
              
              <a href="/portafolio">
                <Button size="md" color="white" variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Soluciones
                    
                </Button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://smartprint.bg/en/wp-content/uploads/2020/01/cloud_hosting.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="light-green"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Hosting y alojamiento web
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Ofrecemos paquetes de desarrollo para alojar su aplicación en internet, configuración de correos y dominios para su organización. 
            </Typography>
            <div className="flex justify-center gap-22">
              <a href="/consultoria">
              <Button size="md" color="green" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Conocer más
              </Button></a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://www.gbsitservices.com/blog/wp-content/uploads/2023/06/soporte-it.png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="light-green"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Soporte y mantenimiento
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Disponemos de un equipo técnico para brindar soporte a todos nuestros clientes 24/7 por todos nuestros canales disponibles.
            </Typography>
            <div className="flex justify-center gap-22">
              <Button size="md" color="green" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Conocer más
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}