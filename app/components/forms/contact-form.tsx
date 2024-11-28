'use client';
import { Button, Input, Textarea } from "@material-tailwind/react";
import { PageTitle } from "@/app/components/page-title";

async function handleSubmit(event:any){
    event.preventDefault()
    const formData = new FormData(event.target);

    try {
  
        const response = await fetch('/api/contacto', {
            method: 'post',
            body: formData,
        });

        if (!response.ok) {
            console.log("falling over")
            throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message'])

        alert('Message successfully sent');
    } catch (err) {
        console.error(err);
        alert("Error, please try resubmitting the form");
    }
}

export default function ContactForm(){
    return(
        <>
           <PageTitle  heading="¡Escríbenos!" hijo={"No dudes en comunicarte por todos nuestros canales y te responderemos inmediatamente para brindarte más información acerca de nuestros servicios."}>    
            </PageTitle>
            <form id="correosClientes" onSubmit={handleSubmit} className="mx-auto mt-12 max-w-2xl text-center">
                <Input variant="outlined" size="md" label="Nombres completos *" name="nombres" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>
                    <div className="mt-5">
                        <Input variant="outlined" size="md" label="Correo electrónico *" name="email" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} required/>   
                    </div>
                    <div className="mt-5">
                        <Input variant="outlined" size="md" label="Teléfono *" name="telefono" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}/>   
                        </div>
                    <div className="mt-5">
                        <Textarea variant="outlined" size="md" label="Mensaje *" name="mensaje" rows={8} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />  
                    </div>
                    <Button type="submit" color="light-green" variant="gradient" size="lg" className="mt-8 mb-10"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Enviar
                    </Button>
            </form>          
        </>
    );
}