import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "O nome precisa conter no mínimo 2 caracteres."),
  
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de e-mail inválido."),
  
  password: z
    .string()
    .min(6, { message: "A senha precisa conter no mínimo 6 caracteres" }),
});

export type SignupData = z.infer<typeof signupSchema>;