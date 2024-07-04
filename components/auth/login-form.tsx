"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";

import { LoginSchema } from "../../schemas";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";

import { login } from "@/actions/login";



import {
    UserIcon,
    KeyIcon,
    EyeIcon,
    EyeSlashIcon
} from '@heroicons/react/24/outline';



export const LoginForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [showPassword, setShowPassword] = useState(false);

    const [isPending, startTrasition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { username: "", password: "" }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");

        startTrasition(() => {
            login(values).then((data) => {
                setError(data?.error);
            })
        });
    }

    const handleClickShowPassword = (e: any) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
    

    return (
        <CardWrapper 
            headerLabel="Autentificación" 
        >
            <Form {...form}>
                <form
                    className="space-y-6"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Usuario</FormLabel>
                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                className="peer block w-full rounded-md border border-neutral-200 py-[9px] pl-10 text-sm outline-sky-500 placeholder:text-neutral-200"
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Nombre de usuario"
                                                type="text"
                                            />
                                        </FormControl>
                                        <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500 peer-focus:text-neutral-900" />
                                    </div>
                                    <FormMessage />

                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contraseña</FormLabel>

                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                className="peer block w-full rounded-md border border-neutral-200 py-[9px] pl-10 text-sm outline-sky-500 placeholder:text-gray-500"
                                                {...field}
                                                disabled={isPending}
                                                placeholder="password"
                                                type={showPassword ? "text" : "password"}
                                            />
                                        </FormControl>
                                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500 peer-focus:text-neutral-900" />

                                        {showPassword ?
                                            <EyeIcon className="cursor-pointer absolute end-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500 peer-focus:text-neutral-900" onClick={(e) => handleClickShowPassword(e)} /> :
                                            <EyeSlashIcon className="cursor-pointer absolute end-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-500 peer-focus:text-neutral-900" onClick={(e) => handleClickShowPassword(e)} />
                                        }

                                    </div>


                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <FormError message={error} />

                    <Button
                        type="submit"
                        variant="custom"
                        className="w-full"
                        disabled={isPending}
                    >
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}