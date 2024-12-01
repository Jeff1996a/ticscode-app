import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const phoneValidation = new RegExp(
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  );

export const emailTemplateSchema = z.object({
  nombres: z.string().min(2),
  email: z.string().min(2).email(),
  telefono: z.string().min(9).max(12),
  mensaje: z.string().min(1),
  politica: z.boolean()
});

export type EmailTemplateProps = z.infer<typeof emailTemplateSchema>;
