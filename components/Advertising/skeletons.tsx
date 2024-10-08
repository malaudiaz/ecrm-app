
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
            <div className="flex p-4">
                <div className="h-5 w-5 rounded-md bg-gray-200" />
                <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
            <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
                <div className="h-7 w-20 rounded-md bg-gray-200" />
            </div>
        </div>
    );
}

export function CardsSkeleton() {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    );
}

export function TableRowSkeleton() {
    return (
        <tr className="w-full border-b border-neutral-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            {/* Year */}
            <td className="relative overflow-hidden whitespace-nowrap py-2 pl-6 pr-3">
                <div className="flex items-center gap-3">
                    <div className="h-6 w-12 rounded bg-neutral-100"></div>
                </div>
            </td>
            {/* Name */}
            <td className="whitespace-nowrap px-3 py-2">
                <div className="h-6 w-full rounded bg-neutral-100"></div>
            </td>
            {/* Actions */}
            <td className="whitespace-nowrap py-2 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                    <div className="h-[32px] w-[32px] rounded bg-neutral-100"></div>
                    <div className="h-[32px] w-[32px] rounded bg-neutral-100"></div>
                </div>
            </td>
        </tr>
    );
}

export function InvoicesMobileSkeleton() {
    return (
        <div className="mb-2 w-full rounded-md bg-white p-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                <div className="flex items-center">
                    <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
                    <div className="h-6 w-16 rounded bg-gray-100"></div>
                </div>
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </div>
            <div className="flex w-full items-center justify-between pt-4">
                <div>
                    <div className="h-6 w-16 rounded bg-gray-100"></div>
                    <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
                </div>
                <div className="flex justify-end gap-2">
                    <div className="h-10 w-10 rounded bg-gray-100"></div>
                    <div className="h-10 w-10 rounded bg-gray-100"></div>
                </div>
            </div>
        </div>
    );
}

export function InvoicesTableSkeleton() {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        <InvoicesMobileSkeleton />
                        <InvoicesMobileSkeleton />
                        <InvoicesMobileSkeleton />
                        <InvoicesMobileSkeleton />
                        <InvoicesMobileSkeleton />
                        <InvoicesMobileSkeleton />
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Customer
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Email
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Amount
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Date
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                                >
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export function CampaignMobileSkeleton() {
    return (
        <div className="mb-2 w-full rounded-md bg-white p-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-8">
                <div className="flex items-center">
                    {/* <div className="mr-2 h-8 w-8 rounded-full bg-neutral-100"></div> */}
                    <div className="h-6 w-100 rounded bg-neutral-100"></div>
                </div>
                {/* <div className="h-6 w-16 rounded bg-neutral-100"></div> */}
            </div>
            <div className="flex w-full items-center justify-between pt-4">
                <div>
                    {/* <div className="h-6 w-16 rounded bg-neutral-100"></div> */}
                    <div className="mt-2 h-6 w-20 rounded bg-neutral-100"></div>
                </div>
                <div className="flex justify-end gap-2">
                    <div className="h-10 w-10 rounded bg-neutral-100"></div>
                    <div className="h-10 w-10 rounded bg-neutral-100"></div>
                </div>
            </div>
        </div>
    );
}

export function CampaignTableSkeleton() {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-neutral-100 p-2 md:pt-0">
                    <div className="md:hidden">
                        <CampaignMobileSkeleton />
                        <CampaignMobileSkeleton />
                        <CampaignMobileSkeleton />
                    </div>
                    <table className="hidden min-w-full text-neutral-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Año
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Nombre
                                </th>
                                <th
                                    scope="col"
                                    className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                                >
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )    
}

export function DepartmentTableSkeleton() {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-neutral-100 p-2 md:pt-0">
                    <div className="md:hidden">
                        <CampaignMobileSkeleton />
                        <CampaignMobileSkeleton />
                        <CampaignMobileSkeleton />
                        <CampaignMobileSkeleton />
                    </div>
                    <table className="hidden min-w-full text-neutral-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Codigo
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Nombre
                                </th>
                                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Codigo oficina
                                </th>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Codigo oficina
                                </th>
                                <th
                                    scope="col"
                                    className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                                >
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )    
}

export function SpecialistTableSkeleton() {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-neutral-100 p-2 md:pt-0">
                    <div className="md:hidden">
                        <CampaignMobileSkeleton />
                        <CampaignMobileSkeleton />
                        <CampaignMobileSkeleton />
                        <CampaignMobileSkeleton />
                    </div>
                    <table className="hidden min-w-full text-neutral-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Nombre de usuario
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Codigo
                                </th>
                                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Codigo departamento
                                </th>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Activo
                                </th>
                                <th
                                    scope="col"
                                    className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                                >
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                            <TableRowSkeleton />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )    
}
