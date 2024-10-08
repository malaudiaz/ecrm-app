import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { auth } from "@/auth";

import { CreateButton } from "@/components/CreateButton";
import Search from "@/components/Search";
import { Suspense } from 'react';
import Table from "@/components/Advertising/table"
import { InvoicesTableSkeleton } from '@/components/Advertising/skeletons';
import Pagination from "@/components/Pagination";
import { mainMenu } from "./menu";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Link from "next/link";


export const metadata: Metadata = {
    title: "eCRM | Módulo de Públicidad",
    description:
        "Página principal del Módulo de Públicidad",
};


export default async function AdventisingPage({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const session = await auth();

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    // const totalPages = await fetchInvoicesPages(query);
    const totalPages = 20;

    return (
        <DefaultLayout menu={mainMenu}>
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                        Públicidad
                    </h2>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/dashboard">Inicio</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Públicidad</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <div className="w-full">
                <div className="mt-4 flex flex-row items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Buscar publicidad..." />
                    <CreateButton href="/advertising/create" label="Nueva" />
                </div>

                <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                    <Table query={query} currentPage={currentPage} />
                </Suspense>

                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages} />
                </div>

            </div>
        </DefaultLayout>
    );
};