import {NextRequest, NextResponse} from "next/server";
import { UserType } from "@/app/types/user"
import {conn} from "@/app/utils/connectiondb"

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await conn.connect();
      // Send a ping to confirm a successful connection
      await conn.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await conn.close();
    }
}

export async function GET(request: NextRequest){
    const greeting = "Bienvenidos a TicsCode!!"
    const json = {
        greeting
    };

    run().catch(console.dir);
    
    return NextResponse.json(json);
}