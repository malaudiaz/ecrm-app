"use client";

import * as z from "zod";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { AdvertisingSchema } from '@/schemas/Advertising';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"


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
        <Card className="w-full shadow-md border border-neutral-200">
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

                            <FormField
                                control={form.control}
                                name="partner"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cliente</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    className="peer block w-full rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500"
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

                            <FormField
                                control={form.control}
                                name="contact"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contacto</FormLabel>
                                        <div className="relative">
                                            <FormControl>

                                                <Select>
                                                    <SelectTrigger className="w-[280px]">
                                                        <SelectValue placeholder="Select a timezone" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>North America</SelectLabel>
                                                            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                                            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                                            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                                            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                                            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                                            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>Europe & Africa</SelectLabel>
                                                            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                                            <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                                            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                                            <SelectItem value="west">
                                                                Western European Summer Time (WEST)
                                                            </SelectItem>
                                                            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                                            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>Asia</SelectLabel>
                                                            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                                            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                                            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                                            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                                            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                                            <SelectItem value="ist_indonesia">
                                                                Indonesia Central Standard Time (WITA)
                                                            </SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>Australia & Pacific</SelectLabel>
                                                            <SelectItem value="awst">
                                                                Australian Western Standard Time (AWST)
                                                            </SelectItem>
                                                            <SelectItem value="acst">
                                                                Australian Central Standard Time (ACST)
                                                            </SelectItem>
                                                            <SelectItem value="aest">
                                                                Australian Eastern Standard Time (AEST)
                                                            </SelectItem>
                                                            <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                                                            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>South America</SelectLabel>
                                                            <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                                            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                                            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                                            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>

                                            </FormControl>
                                        </div>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />



                            <FormField
                                control={form.control}
                                name="campaign"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Campaña</FormLabel>
                                        <div className="relative">
                                            <FormControl>

                                                <Select name="campaign">
                                                    <SelectTrigger className="w-[280px]">
                                                        <SelectValue placeholder="Select a timezone" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>North America</SelectLabel>
                                                            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                                            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                                            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                                            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                                            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                                            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>Europe & Africa</SelectLabel>
                                                            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                                            <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                                            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                                            <SelectItem value="west">
                                                                Western European Summer Time (WEST)
                                                            </SelectItem>
                                                            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                                            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>Asia</SelectLabel>
                                                            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                                            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                                            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                                            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                                            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                                            <SelectItem value="ist_indonesia">
                                                                Indonesia Central Standard Time (WITA)
                                                            </SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>Australia & Pacific</SelectLabel>
                                                            <SelectItem value="awst">
                                                                Australian Western Standard Time (AWST)
                                                            </SelectItem>
                                                            <SelectItem value="acst">
                                                                Australian Central Standard Time (ACST)
                                                            </SelectItem>
                                                            <SelectItem value="aest">
                                                                Australian Eastern Standard Time (AEST)
                                                            </SelectItem>
                                                            <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                                                            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                                                        </SelectGroup>
                                                        <SelectGroup>
                                                            <SelectLabel>South America</SelectLabel>
                                                            <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                                            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                                            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                                            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>

                                            </FormControl>
                                        </div>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />


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

                            <FormField
                                control={form.control}
                                name="payInit"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pago Inicial</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    className="peer block  rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500"
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
                                                    placeholder="Pago Inicial"
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



                    </form>
                </Form>


            </CardContent>
        </Card>
    )
};
export default CreateForm;
