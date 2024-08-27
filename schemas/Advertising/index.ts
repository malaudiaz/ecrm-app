import * as z from "zod";

export const AdvertisingSchema = z.object({
  partner: z.string().min(1, { message: "El cliente es requerido" }).trim(),
  contact: z.string({ required_error: "Contacto requerido" }).trim(),
  campaign: z.string({ required_error: "Campaña requerida" }),
  observation: z.string(),
  invoiceFormat: z.string({ required_error: "Forma de Facturar requerida" }),
  payInit: z.string({ required_error: "Pago inicial requerido" }),
  payEnd: z.string({ required_error: "Pago Final requerido" }),
  discount: z.string(),
});

export const CampaignSchema = z.object({
  eid: z.string().trim(),
  name: z
    .string({ required_error: "Nombre de la Campaña es requerido" })
    .min(5, {
      message: "El nombre de la campaña debe tener al menos 5 caracteres",
    })
    .max(100, {
      message: "El nombre de la campanña no debe tener mas de 100 caracteres",
    })
    .trim(),
  year: z
    .string({ required_error: "Año de la Campaña es requerido" })
    .min(4, { message: "El año debe tener al menos 4 caracteres" })
    .max(4, { message: "El año no debe tener mas de 4 caracteres" })
    .trim(),
});

export const DepartmentSchema = z.object({
  eid: z.string().trim(),
  code: z
    .string({ required_error: "Codigo requerido" })
    .max(10, { message: "El codigo no debe tener mas de 10 caracteres" })
    .trim(),
  name: z
    .string({ required_error: "Nombre de la departamento es requerido" })
    .min(3, {
      message: "El nombre de la departamento debe tener al menos 3 caracteres",
    })
    .max(20, {
      message:
        "El nombre de la departamento no debe tener mas de 20 caracteres",
    })
    .trim(),
  comercial_group_eid: z.string().trim(),
  store_code_legal: z.string().trim(),
  store_code_natural : z.string().trim(),
});
export const SpecialistSchema = z.object({
  eid: z.string().trim(),
  user_name: z
    .string({ required_error: "Nombre de usuario del especialista es requerido" })
    .min(3, {
      message: "El nombre del especialista debe tener al menos 3 caracteres",
    })
    .max(20, {
      message:
        "El nombre del especialista no debe tener mas de 20 caracteres",
    })
    .trim(),
  code: z
    .string({ required_error: "Codigo requerido" })
    .max(10, { message: "El codigo no debe tener mas de 10 caracteres" })
    .trim(),
  
  publish_departament_eid: z.string().trim(),
  is_active: z.boolean(),
});

