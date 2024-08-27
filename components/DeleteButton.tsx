"use client"

import Swal from "sweetalert2";
import { TrashIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface DeleteButtonProps {
    id?: string,
    onDeleted: Function,
    alertTitle: string,
    alertText: string
}


export const DeleteButton = ({ id, onDeleted, alertTitle, alertText }: DeleteButtonProps) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const deleteRecord = async () => {
        const { success, detail } = await onDeleted(id);
        if (success) {
            const params = new URLSearchParams(searchParams);
            params.set('page', '1');       
            params.delete('query');
            replace(`${pathname}?${params.toString()}`);
                    
            Swal.fire({
                title: alertTitle,
                text: detail,
                icon: "success",
                showCancelButton: false,
                allowOutsideClick: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Aceptar",
            });
        } else {
            Swal.fire({
                title: alertTitle,
                text: detail,
                icon: "error",
                showCancelButton: false,
                allowOutsideClick: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Aceptar",
            });
        }
    }

    return (
        <form action={() => {
            Swal.fire({
                title: alertTitle,
                text: alertText,
                icon: "question",
                showCancelButton: true,
                cancelButtonText: "No",
                allowOutsideClick: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Sí",
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteRecord()
                }
            });
        }}>
            <button className="rounded-md border border-sky-700 p-2 hover:bg-neutral-200">
                <span className="sr-only">Delete</span>
                <TrashIcon className="h-5" />
            </button>
        </form>
    )
}