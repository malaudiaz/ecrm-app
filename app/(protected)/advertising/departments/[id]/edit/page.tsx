import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { mainMenu } from "@/app/(protected)/advertising/menu";
import Link from "next/link";
import { fetchDepartmentById } from "@/lib/Advertising/data";
import { notFound } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import EditForm from "@/components/Advertising/departments/edit-form";

export default async function EditDepartment({ params }: { params: { id: string } }) {
    const id = params.id;

    const { data } = await fetchDepartmentById(id);

    if (!data) {
        notFound();
    }  
    
    return (

        <DefaultLayout menu={mainMenu}>
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                        Editar Departamento
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
                                <BreadcrumbLink asChild>
                                    <Link href="/advertising/departments">Departamento</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Editar Campaña</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="w-full">
                    {data && <EditForm department={data}/>}
                </div>
            </div>
        </DefaultLayout>
    )
}