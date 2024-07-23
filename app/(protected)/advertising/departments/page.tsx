import { fetchDepartments } from "@/lib/Advertising/data";
import { notFound } from "next/navigation";
import { mainMenu } from "../menu";
import Search from "@/components/Search";
import { CreateButton } from "@/components/CreateButton";
import { Suspense } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import {
  CampaignTableSkeleton,
  DepartmentTableSkeleton,
} from "@/components/Advertising/skeletons";
import Table from "@/components/Advertising/campaign/table";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import DepartmentTable from "@/components/Advertising/departments/table";

export default async function DepartmentsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const response = await fetchDepartments(query, currentPage, 5);

//   if (!response?.total_pages) {
//     notFound();
//   }

  const total_pages = response?.total_pages || 1;

  return (
    <DefaultLayout menu={mainMenu}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Departamentos
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
                <BreadcrumbPage>Departamentos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="w-full">
        <div className="mt-4 flex flex-row items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Buscar departamentos..." />
          <CreateButton href="/advertising/departments/create" label="Nueva" />
        </div>
        <Suspense
          key={query + currentPage}
          fallback={<DepartmentTableSkeleton />}
        >
          <DepartmentTable currentPage={currentPage} query={query} />
        </Suspense>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={total_pages} />
        </div>
      </div>
    </DefaultLayout>
  );
}
