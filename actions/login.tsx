"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    if (!validateFields.success) {
        return {error: "Invalid fields"};
    }

    const { username, password } = validateFields.data;

    try {
        await signIn("credentials", {
            username,
            password,
            redirectTo: DEAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Credenciales incorrectas"}
                case "CallbackRouteError":
                    return {error: "Credenciales incorrectas!"}
                default:
                    return { error: "Algo esta mal!"}

            }
        }

        throw error;
    }
}