'use client';
import { Button, Checkbox, Input, Textarea, Typography } from "@material-tailwind/react";
import { PageTitle } from "@/app/components/page-title";
import { DialogBox } from "../ui/modal/modal";
import React, { SyntheticEvent, useRef } from "react";
import { InputPhoneCountryCode } from "../ui/input-phone/input-phone";
import { useForm } from "react-hook-form";
import { EmailTemplateProps, emailTemplateSchema } from "@/app/types/emailTemplate";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm(){

    const {reset, handleSubmit, register,getValues, formState: { errors },
     } = useForm<EmailTemplateProps>({
    resolver: zodResolver(emailTemplateSchema)});

    const[open, setOpen] = React.useState(false);
    const[mensaje, setMensaje] = React.useState("");
    const [paisCliente, setPaisCliente] = React.useState("");

    async function cerrarModal(){
        if(open == true){
            setOpen(false);
        }
    }

    function handlePhoneNumberChange(pais: any){
        setPaisCliente(pais);
    }

    //Función para manejar el envío de correos
    const submitForm = async (values: EmailTemplateProps ) =>{
    
        const nombres = getValues("nombres");
        const email  = getValues("email");
        const telefono = getValues("telefono");
        const mensaje = getValues("mensaje");  

        const formData = new FormData()

        console.log(values)

        formData.append("nombres", nombres);
        formData.append("email", email);
        formData.append("telefono", telefono);
        formData.append("mensaje", mensaje);
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

                setMensaje("¡Mensaje enviado! Pronto uno de nuestros asesores se comunicará con usted.");

                reset();
            }
        } catch (err) {
    
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    }
   


    return(
        <>
           <PageTitle  heading="¡Contáctos!" hijo={"Escríbanos por cualquiera de nuestros canales y uno de nuestros asesores se comuncará para brindarle más información acerca de nuestros servicios."}>    
            </PageTitle>
            <form id="correosClientes" onSubmit={handleSubmit(submitForm)} className="mx-auto mt-12 max-w-2xl text-center">
                    <div>
                        <Input variant="outlined"  size="md" label="Nombres completos" 
                        {...register("nombres")} 
                        onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} required/>
                        {errors?.nombres && <span className="text-red-500 text-xs">{errors.nombres.message}</span>}
                    </div>
                    <div className="mt-5">
                        <Input variant="outlined" size="md" label="Correo electrónico" {...register('email')} 
                        name="email"
                        onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} required/>   
                        {errors?.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </div>
                    <div className="mt-4 w-100">
                        <InputPhoneCountryCode handleChangeCountry={handlePhoneNumberChange} register={register}></InputPhoneCountryCode>
                        {errors?.telefono && <span className="text-red-500 text-xs">{errors.telefono.message}</span>}
                    </div>
                    <div className="mt-5">
                        <Textarea variant="outlined" size="md" label="Mensaje" {...register("mensaje")} name="mensaje" rows={8} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} required />  
                    </div>
                    <div className="-ml-2.5 w-full col-span-2">
                        <Checkbox {...register("politica")} 
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
                        containerProps={{ className: "-ml-2.5" }} required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}              />
                    </div>
                    <Button type="submit"
                    color="light-green" variant="gradient" size="lg" className="mt-8 mb-10"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                        Enviar
                    </Button>
            </form>     
            <DialogBox open={open} size={"xs"} message={mensaje} funcion={cerrarModal}></DialogBox>    
        </>
    );
}