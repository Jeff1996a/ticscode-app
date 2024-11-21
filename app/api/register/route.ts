import {NextRequest, NextResponse} from "next/server";
import { UserType } from "../types/user";

export async function GET (request: NextRequest){
    const greeting = "Bienvenidos a TicsCode!!"
    const json = {
        greeting
    };
    
    return NextResponse.json(json);
}