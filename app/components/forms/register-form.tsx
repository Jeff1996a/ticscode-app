'use client';
import { Button, Input} from "@material-tailwind/react";

export default function RegisterForm(){
    return(
        <>
           
           <form id="formularioRegistro" className="gap-2 md:grid md:grid-cols-2">
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
        </>
    );
}