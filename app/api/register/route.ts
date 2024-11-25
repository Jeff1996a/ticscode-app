import {NextRequest, NextResponse} from "next/server";
import { Usuario } from "@/app/types/usuario"
import {conn} from "@/app/utils/connectiondb"

/*export async function GET(request: NextRequest){

    try {
        await conn.connect();

        // Choose a name for your database
        const database = conn.db("ticscodeApp");

        // Choose a name for your collection
        const collection = database.collection("usuario");
        const allData = await collection.find({}).toArray();

         return NextResponse.json(allData);

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" });
    } finally {
        await conn.close();
    }
}*/
export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'POST':
        const data = req.body;
        // Process the data
        res.status(200).json({ message: 'Data received', data });
        break;
      case 'GET':
        res.status(200).json({ message: 'This is a GET request' });
        break;
      default:
        res.status(405).json({ error: 'Method not allowed' });
        break;
    }
}

