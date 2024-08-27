import { UpdateButton } from "../../UpdateButton";
import { DeleteButton } from "../../DeleteButton";
import { fetchSpecialist } from "@/lib/Advertising/data";
import { deleteCampaign } from "@/lib/Advertising/data";
import { notFound } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function SpecialistTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const response = await fetchSpecialist(query, currentPage, 5);

  if (!response?.data) {
    notFound();
  }

  const specialist = response?.data;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-neutral-100 p-2 md:pt-0">
          <div className="md:hidden">
            {specialist?.map((item) => (
              <div
                key={item.eid}
                className="mb-2 w-full rounded-md bg-white text-gray-900 p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <p className="text-xl font-medium">{item.user_name}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-sm text-neutral-500">{item.code}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">{item.publish_departament_eid}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">{item.is_active}</p>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <UpdateButton
                      href={`/advertising/specialist/${item.eid}/edit`}
                    />
                    <DeleteButton
                      id={item.eid}
                      onDeleted={deleteCampaign}
                      alertTitle="Eliminar Especialista"
                      alertText="Desea eliminar esta especialista ?"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Table className="hidden md:table w-full text-neutral-900">
            <TableHeader className='className="rounded-lg text-left text-sm font-normal"'>
              <TableRow className="border-neutral-200">
                <TableHead className="px-4 py-5 font-medium sm:pl-6">
                  Nombre de usuario
                </TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">
                  Codigo
                </TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">
                  Codigo departamento
                </TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">
                  Activo
                </TableHead>
                <TableHead className="relative py-3 pl-6 pr-3"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {specialist.map((item) => (
                <TableRow
                  key={item.eid}
                  className="w-full border-b border-b-neutral-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.user_name}
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.code}
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.publish_departament_eid}
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.is_active}
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateButton
                        href={`/advertising/specialist/${item.eid}/edit`}
                      />
                      <DeleteButton
                        id={item.eid}
                        onDeleted={deleteCampaign}
                        alertTitle="Eliminar Campaña"
                        alertText="Desea eliminar esta campaña ?"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}