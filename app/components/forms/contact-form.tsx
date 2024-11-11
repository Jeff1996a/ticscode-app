'use client';
import { Button, Input, Textarea } from "@material-tailwind/react";
import { PageTitle } from "@/app/components/page-title";

export default function ContactForm(){
    return(
        <>
           <PageTitle  heading="¡Escríbenos!" hijo={"No dudes en comunicarte por todos nuestros canales y te responderemos inmediatamente para brindarte más información acerca de nuestros servicios."}>    
            </PageTitle>
            <form id="correosClientes" className="mx-auto mt-12 max-w-2xl text-center">
                <Input variant="outlined" size="md" label="Nombres completos *" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
                    <div className="mt-5">
                        <Input variant="outlined" size="md" label="Correo electrónico *" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} required/>   
                    </div>
                    <div className="mt-5">
                        <Input variant="outlined" size="md" label="Teléfono *" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>   
                        </div>
                    <div className="mt-5">
                        <Textarea variant="outlined" size="md" label="Mensaje *" rows={8} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />  
                    </div>
                    <Button color="light-green" variant="gradient" size="lg" className="mt-8 mb-10"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Enviar
                    </Button>
            </form>          
        </>
    );
}