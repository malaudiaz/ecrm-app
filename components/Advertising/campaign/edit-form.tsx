"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useFormStatus } from 'react-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CampaignType } from "@/lib/definitions";
import { CampaignSchema } from "@/schemas/Advertising";
import { updateCampaign } from "@/lib/Advertising/data";
import { CheckCircleIcon } from '@heroicons/react/20/solid';

export default function EditForm({campaign}:{campaign: CampaignType}){

    const [isPending, startTrasition] = useTransition();

    const form = useForm<z.infer<typeof CampaignSchema>>({
        resolver: zodResolver(CampaignSchema),
        defaultValues: {
            eid: campaign.eid, name: campaign.name, year: campaign.year
        }
    });

    const onSubmit = (values: z.infer<typeof CampaignSchema>) => {
        startTrasition(() => {
            updateCampaign(values);
        });
    }

    return (
        <Card className="w-full shadow-md border border-neutral-200">
            <CardHeader>
                <strong>Datos de la Campaña</strong>
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
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nombre</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    className="peer block w-full rounded-md border border-neutral-200 py-[9px] text-sm outline-2 placeholder:text-neutral-500"
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="Nombre de la Campaña"
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
                                name="year"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Año</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    className="peer block w-[100px] rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500"
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="Año"
                                                    type="text"
                                                />
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
}

function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <Button variant={"custom"} size={"sm"} className="mt-4" aria-disabled={pending}>
         <CheckCircleIcon className="ml-auto mr-2 h-5 w-5 text-gray-50" />Guardar
      </Button>
    );
  }