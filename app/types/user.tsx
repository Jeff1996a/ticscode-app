import {z} from "zod";

export const UserSchema = z.object({
    id: z.string(),
    nombres: z.string().min(5),
    apellidos: z.string().min(5),
    telefono: z.string(),
    email: z.string().email()
}) 

export type UserType = z.infer<typeof UserSchema>;