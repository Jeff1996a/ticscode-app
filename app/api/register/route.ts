import {NextRequest, NextResponse} from "next/server";
import { Usuario } from "@/app/types/usuario"
import {conn} from "@/app/utils/connectiondb"

export async function GET(request: NextRequest){

    try {
        await conn.connect();

        // Choose a name for your database
        const database = conn.db("ticscodeApp");

        // Choose a name for your collection
        const collection = database.collection("usuario");
        const allData = await collection.find().toArray();

         return NextResponse.json(allData);

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" });
    } finally {
        await conn.close();
    }
}

export async function POST(request: NextRequest){

        const userData = await request.json();

        try {
            await conn.connect();
    
            // Choose a name for your database
            const database = conn.db("ticscodeApp");
    
            // Choose a name for your collection
            const collection = database.collection("usuario");
            const result = await collection.insertOne(userData);

            if(result != 0){
                return NextResponse.json({message:"Registro ingresado correctamente"});
            }
            else{
                return NextResponse.json({message:"Error al ingresar el registro"});
            }   
    
        } catch (error) {
            return NextResponse.json({ message: "Something went wrong!" });
        } finally {
            await conn.close();
        }
        
        return NextResponse.json(userData);
}


