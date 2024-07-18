"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { FieldValues } from "react-hook-form"
import { Input } from "../ui/input";


import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

import { ScrollArea } from "@/components/ui/scroll-area"


import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import Pagination from "@/components/Pagination";

import * as Avatar from '@radix-ui/react-avatar';


interface FindPartnerProps {
    field: FieldValues
}

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Search from "../Search";


export function FindPartner({ field }: FindPartnerProps) {
    return (
        <div className="relative">
            <FormControl>
                <Input
                    className="peer block w-full rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-gray-500"
                    {...field}
                    placeholder="Cliente"
                    disabled
                />
            </FormControl>

            <Dialog>
                <DialogTrigger asChild>
                    <MagnifyingGlassIcon className="cursor-pointer absolute end-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-400 peer-focus:text-neutral-900" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] md:max-w-[800px]">
                    <DialogHeader>
                        <DialogTitle>Buscar clientes</DialogTitle>
                        <DialogDescription>
                            Haga su búsqueda de clientes aquí.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-2 py-1">

                        <Search placeholder="Buscar cliente..." />

                        <div className="grid items-center gap-2 pt-2 scr">

                            <div className="md:hidden">

                                <ScrollArea className="h-[300px] w-full rounded-md">

                                    <div
                                        key={1}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex gap-2 items-center justify-between border-b pb-1">
                                            <Avatar.Root className="AvatarRoot">
                                                <Avatar.Fallback className="flex w-10 h-10 rounded-full items-center justify-center bg-neutral-200 text-sm font-medium">PD</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="mb-2 flex items-center">
                                                <b>{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</b>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-2">
                                            <p className="text-sm font-medium">
                                                NIT: <b>{"333333"}</b>
                                            </p>
                                            <p className="text-sm font-medium">
                                                REUP: <b>{"111111"}</b>
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        key={2}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex gap-2 items-center justify-between border-b pb-1">
                                            <Avatar.Root className="AvatarRoot">
                                                <Avatar.Fallback className="flex w-10 h-10 rounded-full items-center justify-center bg-neutral-200 text-sm font-medium">PD</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="mb-2 flex items-center">
                                                <b>{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</b>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-2">
                                            <p className="text-sm font-medium">
                                                NIT: <b>{"333333"}</b>
                                            </p>
                                            <p className="text-sm font-medium">
                                                REUP: <b>{"111111"}</b>
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        key={3}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex gap-2 items-center justify-between border-b pb-1">
                                            <Avatar.Root className="AvatarRoot">
                                                <Avatar.Fallback className="flex w-10 h-10 rounded-full items-center justify-center bg-neutral-200 text-sm font-medium">PD</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="mb-2 flex items-center">
                                                <b>{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</b>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-2">
                                            <p className="text-sm font-medium">
                                                NIT: <b>{"333333"}</b>
                                            </p>
                                            <p className="text-sm font-medium">
                                                REUP: <b>{"111111"}</b>
                                            </p>
                                        </div>
                                    </div>


                                    <div
                                        key={5}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex gap-2 items-center justify-between border-b pb-1">
                                            <Avatar.Root className="AvatarRoot">
                                                <Avatar.Fallback className="flex w-10 h-10 rounded-full items-center justify-center bg-neutral-200 text-sm font-medium">PD</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="mb-2 flex items-center">
                                                <b>{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</b>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-2">
                                            <p className="text-sm font-medium">
                                                NIT: <b>{"333333"}</b>
                                            </p>
                                            <p className="text-sm font-medium">
                                                REUP: <b>{"111111"}</b>
                                            </p>
                                        </div>
                                    </div>


                                    <div
                                        key={5}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex gap-2 items-center justify-between border-b pb-1">
                                            <Avatar.Root className="AvatarRoot">
                                                <Avatar.Fallback className="flex w-10 h-10 rounded-full items-center justify-center bg-neutral-200 text-sm font-medium">PD</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="mb-2 flex items-center">
                                                <b>{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</b>
                                            </div>
                                        </div>
                                        <div className="flex w-full items-center justify-between pt-2">
                                            <p className="text-sm font-medium">
                                                NIT: <b>{"333333"}</b>
                                            </p>
                                            <p className="text-sm font-medium">
                                                REUP: <b>{"111111"}</b>
                                            </p>
                                        </div>
                                    </div>

                                </ScrollArea>

                            </div>

                            <Table className="hidden md:table w-full text-neutral-600">
                                <TableHeader className="rounded-lg text-left text-sm font-normal">
                                    <TableRow className='border-neutral-200'>
                                        <TableHead className="px-4 py-5 font-medium sm:pl-6">Nombre</TableHead>
                                        <TableHead className="px-4 py-5 font-medium sm:pl-6">NIT</TableHead>
                                        <TableHead className="px-4 py-5 font-medium sm:pl-6">REUP</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="bg-white">
                                    <TableRow className="w-full border-b border-b-neutral-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"111111"}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"333333"}</TableCell>
                                    </TableRow>
                                    <TableRow className="w-full border-b border-b-neutral-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"111111"}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"333333"}</TableCell>
                                    </TableRow>
                                    <TableRow className="w-full border-b border-b-neutral-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"111111"}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"333333"}</TableCell>
                                    </TableRow>
                                    <TableRow className="w-full border-b border-b-neutral-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"111111"}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"333333"}</TableCell>
                                    </TableRow>
                                    <TableRow className="w-full border-b border-b-neutral-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla..."}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"111111"}</TableCell>
                                        <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{"333333"}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>

                        <div className="flex w-full justify-center">
                            <Pagination totalPages={6} />
                        </div>

                    </div>
                    <DialogFooter>
                        <Button type="submit">Aceptar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>


        </div>

    )
}