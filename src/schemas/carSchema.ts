import { z } from "zod";

export const createCarSchema = z.object({
  toyNumber: z
    .string()
    .min(1, "O código (Toy Number) é obrigatório."),
    
  name: z
    .string()
    .min(1, "O nome da miniatura é obrigatório."),
    
  series: z
    .string()
    .min(1, "A série é obrigatória."),
    
  year: z
    .number({ invalid_type_error: "O ano deve ser um número." })
    .int("O ano deve ser um número inteiro.")
    .min(1968, "A Hot Wheels começou em 1968.") // Uma validação temática de negócio!
    .max(new Date().getFullYear() + 2, "Ano de lançamento muito distante."),
    
  imageUrl: z
    .string()
    .url("Formato de URL inválido.")
    .min(1, "A imagem é obrigatória."),
    
  isTh: z
    .boolean({ invalid_type_error: "Deve ser verdadeiro ou falso." })
    .default(false),
    
  isSth: z
    .boolean({ invalid_type_error: "Deve ser verdadeiro ou falso." })
    .default(false),
});

export type CreateCarData = z.infer<typeof createCarSchema>;