import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { mainMenu } from "../menu";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
    return (
        <DefaultLayout menu={mainMenu}>
            <div className="flex items-center justify-center py-50">
                <div className="flex flex-col gap-3 items-center">
                    <ExclamationCircleIcon className="h-10 w-10 text-rose-500" />
                    <div className="flex flex-row gap-4 justify-center items-center text-black dark:text-white">
                        <span>404</span> | <span>Página no encontrada</span>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
} 