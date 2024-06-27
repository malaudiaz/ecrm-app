"use client"

import { Button } from "../ui/button";
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteAdvertisen } from "@/lib/Advertising/actions";

export const DeleteButton = ({ id }: { id: string }) => {
    const deleteAdvertisenId = deleteAdvertisen.bind(null, id);
    
    return (
        <form action={deleteAdvertisenId}>
            <Button variant={"link"} size={"sm"} className="font-normal w-full" asChild>
                <div>
                    <TrashIcon className="w-5" />
                    <span className="sr-only">Delete</span>
                </div>
            </Button>
        </form>
    )
}