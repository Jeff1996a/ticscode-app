import { Typography, IconButton } from "@material-tailwind/react";
import {FaFacebookF, FaInstagram, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
interface FooterPropsType {
  title: string;
  description: string;
  socials:{color: string, name: string,icon: any, path: string}[];
  menus: {name: string, items:{name:string, path:string}[]}[];
  copyright: any;
}
const year = new Date().getFullYear();

export  function Footer({ title, description, socials, menus, copyright } : FooterPropsType) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="light-green" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
              {title}
            </Typography>
            <Typography className="font-normal text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              {description}
            </Typography>
            {socials.map(({ icon, name, path }) => (
                
                <IconButton
                size="lg"

                key={name}
                className="mb-6 rounded-full ms-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                  
                >
                  <a href={path}>{icon}</a>
                </IconButton>
        
            ))}
            <div >
              
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="light-green"
                  className="mb-2 block font-medium uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-white hover:text-light-green-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-light-green-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
Footer.defaultProps = {
  title: "TicsCode Ecuador",
  description:
    "Crea, innova y sé parte de la nueva revolución digital.",
  socials: [
    {
      color: "white",
      name: "facebook",
      icon: <FaFacebookF/>,
      path: "https://www.facebook.com/profile.php?id=100089732860827",
    },
   
    {
      color: "purple",
      name: "instagram",
      icon: <FaInstagram/>,
      path: "https://www.instagram.com/creativetimofficial/",
    },
    
    
    {
      color: "black",
      name: "github",
      icon: <FaGithub/>,
      path: "https://github.com/Jeff1996a",
    },

    {
      color: "black",
      name: "linkedin",
      icon: <FaLinkedin/>,
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
    {
      color: "black",
      name: "tiktok",
      icon: <FaTiktok/>,
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "mapa del sitio",
      items: [
        { name: "Nosotros", path: "https://www.creative-tim.com/presentation" },
        { name: "Portal web", path: "https://www.creative-tim.com/presentation" },
        { name: "Blog", path: "https://www.creative-tim.com/blog" },
        {
          name: "Github",
          path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        },
        {
          name: "Política de privacidad",
          path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        },
        
      ],
    },
    {
      name: "Soporte",
      items: [
        
        {
          name: "Ayuda",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Contactos",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} TicsCode Ecuador{" "}
      <a
        href="https://www.ticscode.com"
        target="_blank"
        className="text-light-green-500 transition-colors hover:text-light-green-500"
      >
      </a>
      .
    </>
  ),
};
