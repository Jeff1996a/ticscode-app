import {z} from "zod";
import validator from "validator";

export const UserSchema = z.object({
    id: z.string(),
    nombres: z.string().min(5),
    apellidos: z.string().min(5),
    telefono: z.string().refine(validator.isMobilePhone),
    email: z.string().email()
}) 

export type UserType = z.infer<typeof UserSchema>;