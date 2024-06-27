import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { auth } from "@/auth";

import { CreateButton } from "@/components/CreateButton";
import Search from "@/components/Search";
import { Suspense } from 'react';
import Table from "@/components/Advertising/table"
import { InvoicesTableSkeleton } from '@/components/Advertising/skeletons';
import Pagination from "@/components/Pagination";

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
        <DefaultLayout>
            <div className="mx-auto max-w-7xl">
                <Breadcrumb pageName="Públicidad" />
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