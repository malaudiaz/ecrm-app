import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CreateForm from "@/components/Advertising/create-form";


export default async function AdvertisingCreate() {
    return (
        <DefaultLayout>
            <div className="mx-auto max-w-7xl">
                <Breadcrumb pageName="Crear Públicidad" />
            </div>
            <CreateForm />
        </DefaultLayout>
    )
}
