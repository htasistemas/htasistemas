import { z } from "zod";

import { delay, onlyDigits } from "@/lib/utils";

export const leadSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  institution: z.string().min(2, "Informe a empresa ou instituição."),
  whatsapp: z
    .string()
    .min(14, "Informe um WhatsApp válido.")
    .transform((value) => onlyDigits(value))
    .refine((value) => value.length >= 10, "Informe um WhatsApp válido."),
  email: z.string().email("Informe um e-mail válido."),
});

export const contactSchema = leadSchema.extend({
  message: z.string().min(10, "Escreva uma mensagem com mais detalhes."),
});

export type LeadFormValues = z.input<typeof leadSchema>;
export type ContactFormValues = z.input<typeof contactSchema>;

export async function simulateSubmit() {
  await delay(900);
}
