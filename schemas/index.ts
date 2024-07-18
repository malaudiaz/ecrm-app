import * as z from "zod";

export const LoginSchema = z.object({
    username: z
        .string()
            .min(5, { message: "El nombre de usuario debe tener al menos 5 caracteres" })
            .max(20, { message: "El nombre de usuario no debe tener mas de 20 caracteres" })
            .trim(),
    password: z
        .string()
            .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
            .max(20, { message: "La contraseña no debe exceder los 20 caracteres" })
            .trim(),   
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Password is required"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })    
})
