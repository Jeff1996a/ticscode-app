import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


export const emailTemplateSchema = z.object({
  nombres: z.string().min(2),
  email: z.string().min(2).email(),
  telefono: z.string().min(9).max(12),
  mensaje: z.string().min(1),
  politica: z.boolean()
});


export type EmailTemplateProps = z.infer<typeof emailTemplateSchema>;
