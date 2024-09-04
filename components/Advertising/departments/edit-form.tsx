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
import { DepartmentType } from "@/lib/definitions";
import { DepartmentSchema } from "@/schemas/Advertising";
import { updateDepartment } from "@/lib/Advertising/data";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function EditForm({department}:{department: DepartmentType}){
  const [isPending, startTrasition] = useTransition();

  const form = useForm<z.infer<typeof DepartmentSchema>>({
    resolver: zodResolver(DepartmentSchema),
    defaultValues: {
      eid: department.eid,
      code: department.code,
      name: department.name,
      comercial_group_eid: department.comercial_group_eid,
      store_code_legal: department.store_code_legal,
      store_code_natural: department.store_code_legal,
    },
  });

  const onSubmit = (values: z.infer<typeof DepartmentSchema>) => {
    startTrasition(() => {
      updateDepartment(values);
    });
  };

  return (
    <Card className="w-full shadow-md border border-neutral-200">
      <CardHeader>
        <strong>Datos de la Campaña</strong>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Codigo</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="peer block w-[100px] rounded-md border border-neutral-200 py-[9px] text-sm outline-2 placeholder:text-neutral-500"
                          {...field}
                          disabled={isPending}
                          placeholder="Código"
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="peer block w-full rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500"
                          {...field}
                          disabled={isPending}
                          placeholder="Nombre"
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
                name="comercial_group_eid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grupo Comercial</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="peer block w-[100px] rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500"
                          {...field}
                          disabled={isPending}
                          placeholder="Grupo Comercial"
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
                name="store_code_legal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Oficina Empresa</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="peer block w-[100px] rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500"
                          {...field}
                          disabled={isPending}
                          placeholder="Código"
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
                name="store_code_natural"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Oficina Masivo</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="peer block w-[100px] rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500"
                          {...field}
                          disabled={isPending}
                          placeholder="Código"
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
