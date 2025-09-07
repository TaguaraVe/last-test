import { z } from "zod";

export const VendorSchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  phone: z
    .string()
    .min(10, { message: "El teléfono debe tener al menos 10 dígitos." }),
  email: z.string().email({ message: "El correo electrónico no es válido." }),
  role: z.string(),
});
