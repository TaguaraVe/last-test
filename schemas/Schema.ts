import { z } from "zod";

export const sellerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  phone: z
    .string()
    .min(10, { message: "El teléfono debe tener al menos 10 dígitos." }),
  email: z.string().email({ message: "El correo electrónico no es válido." }),
  role: z.string().nullable().optional(),
});

export const channelSchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
});

export type SellerSchema = z.infer<typeof sellerSchema>;
export type ChannelSchema = z.infer<typeof channelSchema>;
