"use client";

import * as z from "zod";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { AdvertisingSchema } from '@/schemas/Advertising';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";


export const CreateForm = () => {

    const form = useForm<z.infer<typeof AdvertisingSchema>>({
        resolver: zodResolver(AdvertisingSchema),
        defaultValues: {
            partner: "", contact: "", campaign: "", discount: 0, invoiceFormat: "", observation: "", payEnd: 0, payInit: 0
        }
    });

    const onSubmit = (values: z.infer<typeof AdvertisingSchema>) => {
        console.log("save");
    }


    return (
        <Card className="w-full shadow-md">
            <CardHeader>
                <strong>Crear Publicidad</strong>
            </CardHeader>
            <CardContent>

                <Form {...form}>
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="space-y-4">

                            <div className="flex flex-row gap-4 justify-between">

                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="partner"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Cliente</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input
                                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                            {...field}
                                                            placeholder="Cliente"
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />

                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="contact"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contacto</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input
                                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                            {...field}
                                                            placeholder="Contacto"
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />

                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>
                      </div>

                      <div className="space-y-4">

                        <div className="flex flex-row gap-4 justify-between">

                            <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="campaign"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Campaña</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input
                                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                            {...field}
                                                            placeholder="Campaña"
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />

                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="discount"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Descuento</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input
                                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                            {...field}
                                                            placeholder="Descuento"
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />

                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>
                     </div>

                     <div className="space-y-4">

                        <div className="flex flex-row gap-4 justify-between">

                            <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="invoiceFormat"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Formato de Factura</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input
                                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                            {...field}
                                                            placeholder="Formato de Factura"
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />

                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="observation"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Observación</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input
                                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                            {...field}
                                                            placeholder="Observación"
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />

                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>
                      </div>

                                            <div className="space-y-4">

                        <div className="flex flex-row gap-4 justify-between">

                            <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="payEnd"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Pago Final</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input
                                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                            {...field}
                                                            placeholder="Pago Final"
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />

                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="payInit"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Pago Inicial</FormLabel>
                                                <div className="relative">
                                                    <FormControl>
                                                        <Input
                                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                            {...field}
                                                            placeholder="Pago Inicial"
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />

                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>
                        </div>

                    </form>
                </Form>


            </CardContent>
        </Card>
    )
};
export default CreateForm;
