import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

//Api para manejar el envio de correos desde el sitio web de TicsCode
export async function POST(request: NextRequest){
    const username = process.env.NEXT_EMAIL_USERNAME;
    const password = process.env.NEXT_EMAIL_PASSWORD;

    const formData = await request.formData();

    const nombres = formData.get("nombres");
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const mensaje = formData.get("mensaje");

    //Crear un objeto nodemailer para manejar el envío de correos
    const transporter = nodemailer.createTransport({
        host: "mail.emsecuador.com",
        port: 465,
        secure: true,
        tls: {
            rejectUnauthorized: false
        }, 
        auth: {
            user: username,
            pass:password,
        },
    });

    try{
        const mail = await transporter.sendMail({
            from: username,
            to: "ticscode@gmail.com",
            subject: "Cliente TicsCode se ha comunicado contigo",
            html: `
            <p>Cliente: ${nombres} </p>
            <p>Email: ${email} </p>
            <p>Teléfono: ${telefono} </p>
            <p>Mensaje: ${mensaje} </p>
            `,
        });

        return NextResponse.json({ message: "Success: email was sent" });
    }
    catch(error){
        console.log(error);
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE" });
    }
}