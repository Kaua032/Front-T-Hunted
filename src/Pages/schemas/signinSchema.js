import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de e-mail inválido."),
  
  password: z
    .string()
    .min(6, { message: "A senha precisa conter no mínimo 6 caracteres" }),
});

export type SigninData = z.infer<typeof signinSchema>;