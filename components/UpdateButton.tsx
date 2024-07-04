"use client"

import Link from "next/link";
import { PencilIcon } from '@heroicons/react/24/outline';

export const UpdateButton = ({ href }: { href: string; }) => {
    return (
        <button className="rounded-md border border-sky-700 p-2 hover:bg-neutral-200">
            <Link href={href}>
                <span className="sr-only">Edit</span>
                <PencilIcon className="h-5" />
            </Link>
        </button>
    )
}