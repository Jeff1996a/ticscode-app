'use client';
import { Button, Checkbox, Input, Textarea, Typography } from "@material-tailwind/react";
import { PageTitle } from "@/app/components/page-title";
import { DialogBox } from "../ui/navbar/modal";
import React, { useRef } from "react";
import { InputPhoneCountryCode } from "../ui/input-phone/input-phone";

export default function ContactForm(){

    const[open, setOpen] = React.useState(false);
    const[mensaje, setMensaje] = React.useState("");
    const [paisCliente, setPaisCliente] = React.useState("");

    async function cerrarModal(){
        if(open == true){
            setOpen(false);
        }
    }

    async function handlePhoneNumberChange(pais: any){
        setPaisCliente(pais);
    }

    //Función para manejar el envío de correos
    async function handleSubmit(event:any){

        event.preventDefault()
    
        const formData = new FormData(event.target);

        formData.append("paisCliente", paisCliente);
    
        try {
      
            const response = await fetch('/api/contacto', {
                method: 'post',
                body: formData,
            });
    
            if (!response.ok) {
                console.log("falling over")
                setOpen(false);
                throw new Error(`response status: ${response.status}`);
            }
            else
            {
                const responseData = await response.json();
    
                console.log(responseData['message'])

                setOpen(true);

                setMensaje("¡Mensaje exitoso! Pronto uno de nuestros asesores se comunicará con usted.");
            }
        } catch (err) {
    
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    }
    

    return(
        <>
           <PageTitle  heading="¡Escríbenos!" hijo={"No dudes en comunicarte por todos nuestros canales y te responderemos inmediatamente para brindarte más información acerca de nuestros servicios."}>    
            </PageTitle>
            <form id="correosClientes" onSubmit={handleSubmit} className="mx-auto mt-12 max-w-2xl text-center">
                <Input variant="outlined" size="md" label="Nombres completos" name="nombres" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} required/>
                    <div className="mt-5">
                        <Input variant="outlined" size="md" label="Correo electrónico" name="email" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} required/>   
                    </div>
                    <div className="mt-2 w-100">
                        <InputPhoneCountryCode handleChangeCountry={handlePhoneNumberChange}></InputPhoneCountryCode>
                    </div>
                    <div className="mt-5">
                        <Textarea variant="outlined" size="md" label="Mensaje" name="mensaje" rows={8} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} required />  
                    </div>
                    <div className="-ml-2.5 w-full col-span-2">
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
                    <Button type="submit" color="light-green" variant="gradient" size="lg" className="mt-8 mb-10"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                        Enviar
                    </Button>
            </form>     
            <DialogBox open={open} size={"xs"} message={mensaje} funcion={cerrarModal}></DialogBox>    
        </>
    );
}