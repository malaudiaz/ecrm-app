"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { PencilIcon } from '@heroicons/react/24/outline';

export const UpdateButton = ({ id }: { id: string }) => {
    return (
        <Button variant={"link"} size={"sm"} className="font-normal w-full" asChild>
            <Link href={`/dashboard/invoices/${id}/edit`}>
                <PencilIcon className="h-5 md:ml-4" />
            </Link>
        </Button>
    )
}