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

export const CampaignSchema = z.object({
    eid: z
        .string()
        .trim(),
    name: z
        .string({ required_error: "Nombre de la Campaña es requerido" })
        .min(5, { message: "El nombre de la campaña debe tener al menos 5 caracteres" })
        .max(100, { message: "El nombre de la campanña no debe tener mas de 100 caracteres" })
        .trim(),
    year: z
        .string({ required_error: "Año de la Campaña es requerido" })
        .min(4, { message: "El año debe tener al menos 4 caracteres" })
        .max(4, { message: "El año no debe tener mas de 4 caracteres" })
        .trim(), 
})
