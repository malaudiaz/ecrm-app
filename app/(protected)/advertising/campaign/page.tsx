import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import Search from "@/components/Search";
import { CreateButton } from "@/components/CreateButton";
import { Suspense } from 'react';
import Pagination from "@/components/Pagination";
import { mainMenu } from "../menu";
import Table from "@/components/Advertising/campaign/table";

import { CampaignTableSkeleton } from "@/components/Advertising/skeletons";
import { notFound } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { fetchCampaign } from '@/lib/Advertising/data';

export const metadata: Metadata = {
    title: "Públicidad | Campañas",
    description:
        "Campañas Publicitarias",
};

export default async function CampaignPage({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const response = await fetchCampaign(query, currentPage, 5);

    if (!response?.total_pages) {
        notFound();
    }   

    const total_pages = response?.total_pages;

    return (

        <DefaultLayout menu={mainMenu}>
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                        Campañas
                    </h2>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/advertising">Publicidad</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Campañas</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <div className="w-full">
                <div className="mt-4 flex flex-row items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Buscar publicidad..." />
                    <CreateButton href="/advertising/campaign/create" label="Nueva" />
                </div>

                <Suspense key={query + currentPage} fallback={<CampaignTableSkeleton />}>
                    <Table currentPage={currentPage} query={query} />
                </Suspense>

                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={total_pages} />
                </div>

            </div>
        </DefaultLayout>

    )

}    