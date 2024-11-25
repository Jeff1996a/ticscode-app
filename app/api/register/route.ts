import {NextRequest, NextResponse} from "next/server";
import { UserType } from "@/app/types/user"
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