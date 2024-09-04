"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SpecialistType } from "@/lib/definitions";
import { SpecialistSchema } from "@/schemas/Advertising";
import { updateSpecialist } from "@/lib/Advertising/data";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Checkbox } from "@/components/ui/checkbox"

export default function EditForm({ specialist }: { specialist: SpecialistType }) {
    const [isPending, startTrasition] = useTransition();

    const form = useForm<z.infer<typeof SpecialistSchema>>({
        resolver: zodResolver(SpecialistSchema),
        defaultValues: {
            eid: specialist.eid,
            code: specialist.code,
            user_name: specialist.user_name,
            publish_departament_eid: specialist.publish_departament_eid,
            is_active: specialist.is_active
        },
    });

    const onSubmit = (values: z.infer<typeof SpecialistSchema>) => {
        startTrasition(() => {
            updateSpecialist(values);
        });
    };

    return (
        <Card className="w-full shadow-md border border-neutral-200">
            <CardHeader>
                <strong>Datos del Especialista</strong>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="user_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nombre de usuario</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    className="peer block w-full rounded-md border border-neutral-200 py-[9px] text-sm outline-2 placeholder:text-neutral-500"
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="Nombre de usuario"
                                                    type="text"
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="code"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Codigo</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    className="peer block w-[100px] rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500"
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="Codigo"
                                                    type="text"
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="publish_departament_eid"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Departamento</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    className="peer block w-[100px] rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500"
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="Codigo Departamento"
                                                    type="text"
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="is_active"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Activo/Inactivo</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Checkbox {...field} />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-end">
                            <SubmitButton />
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            variant={"custom"}
            size={"sm"}
            className="mt-4"
            aria-disabled={pending}
        >
            <CheckCircleIcon className="ml-auto mr-2 h-5 w-5 text-gray-50" />
            Guardar
        </Button>
    );
}
