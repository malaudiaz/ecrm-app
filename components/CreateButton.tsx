"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { PlusIcon } from '@heroicons/react/24/outline';

interface CreateButtonProps {
    href: string,
    label: string,
}

export const CreateButton = ({href, label}: CreateButtonProps) => {
    return (
        <Button variant={"custom"} size={"sm"} className="font-normal" asChild>
            <div>
                <PlusIcon className="h-5 md:mr-2" />
                <Link href={href}>{label}</Link>
            </div>
        </Button>
    )
}