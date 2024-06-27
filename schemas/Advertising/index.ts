import * as z from "zod";

export const AdvertisingSchema = z.object({
    partner: z
        .string({ required_error: "cliente requerido" })
        .trim(),
    contact: z
        .string({ required_error: "Contacto requerido" })
        .trim(), 
    campaign: z
        .string({ required_error: "Campaña requerida" }),
    observation: z
        .string(),
    invoiceFormat: z
        .string({ required_error: "Forma de Facturar requerida" }),
    payInit: z
        .number({ required_error: "Pago inicial requerido" }),
    payEnd: z
        .number({ required_error: "Pago Final requerido" }),
    discount: z
        .number(),

})
