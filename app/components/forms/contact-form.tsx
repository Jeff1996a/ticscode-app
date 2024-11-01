import { Button, Input, Textarea } from "@material-tailwind/react";
import { PageTitle } from "../page-title";

interface ServiciosCardPropsType {
    nombres: string;
    correo: string;
    telefono: number;
    mensaje: string;
}

export default function ContactForm(){
    return(
        <>
            <PageTitle  heading="¡Escríbenos!">
                    No dudes en comunicarte por todos nuestros canales y te responderemos inmediatamente para brindarte más información acerca de nuestros servicios.
                    </PageTitle>
                    <form id="correosClientes" className="mx-auto mt-12 max-w-2xl text-center">
                        <Input variant="outlined" size="sm" label="Nombres completos *"/>
                        <div className="mt-5">
                            <Input variant="outlined" size="sm" label="Correo electrónico *"/>   
                        </div>
                        <div className="mt-5">
                            <Input variant="outlined" size="sm" label="Teléfono *"/>   
                        </div>
                        <div className="mt-5">
                            <Textarea variant="outlined" size="sm" label="Mensaje *" rows={8} />  
                        </div>
                        <Button color="light-green" variant="gradient" size="lg" className="mt-8 mb-10">
                        Enviar
                        </Button>
                    </form>
        </>
    );
}