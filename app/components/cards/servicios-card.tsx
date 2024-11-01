import { Button, Card, CardBody, CardHeader, List, ListItem, Typography } from "@material-tailwind/react";

interface ServiciosCardPropsType {
    img: string;
    title: string;
    subtitle: string;
    desc: string[];
}

export default function ServiciosCard({ img, title, desc, subtitle }: ServiciosCardPropsType){
    return(
        <>
            <Card className="w-full max-w-full flex-row my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover: duration-300 ...">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none">
                <img
                  src={img}
                  alt="card-image"
                  width={500}
                  height={500}
                  className="h-full w-full object- opacity-80"/>
              </CardHeader>
              <CardBody>
                <Typography variant="h3" color="light-green" className="mb-4 animate-bounce">
                  {title}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {subtitle}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                <div>
                        <List className="text-center mt-2" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {desc.map((name) => (
                                        
                                    <ListItem key={name}>
                                        {name}
                                    </ListItem>
                                    ))}
                        </List>
                      </div>
                </Typography>
                <a href="#" className="inline-block">
                  <Button variant="gradient" color="light-green" className="flex items-center gap-2">
                    Contáctanos
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
        </>
    );
}
