import { UpdateButton } from "../../UpdateButton";
import { DeleteButton } from "../../DeleteButton";
import {
  deleteDepartment,
  fetchCampaign,
  fetchDepartments,
} from "@/lib/Advertising/data";
import { notFound } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function DepartmentTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const response = await fetchDepartments(query, currentPage, 5);

  if (!response?.data) {
    notFound();
  }

  const department = response?.data;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-neutral-100 p-2 md:pt-0">
          <div className="md:hidden">
            {department?.map((item) => (
              <div
                key={item.eid}
                className="mb-2 w-full rounded-md bg-white text-gray-900 p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <p className="text-xl font-medium">{item.code}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-sm text-neutral-500">{item.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">
                      {item.store_code_legal}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">
                      {item.store_code_natural}
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-1">
                    <UpdateButton
                      href={`/advertising/department/${item.eid}/edit`}
                    />
                    <DeleteButton
                      id={item.eid}
                      onDeleted={deleteDepartment}
                      alertTitle="Eliminar Departamentos"
                      alertText="Desea eliminar este departamento ?"
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
                  Codigo
                </TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">
                  Grupo Comercial
                </TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">
                  Oficina Empresa
                </TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">
                  Oficina Masivo
                </TableHead>
                <TableHead className="relative py-3 pl-6 pr-3"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {department?.map((item) => (
                <TableRow
                  key={item.eid}
                  className="w-full border-b border-b-neutral-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.code}
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.name}
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.comercial_group_eid}
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.store_code_legal}
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    {item.store_code_natural}
                  </TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateButton
                        href={`/advertising/departments/${item.eid}/edit`}
                      />
                      <DeleteButton
                        id={item.eid}
                        onDeleted={deleteDepartment}
                        alertTitle="Eliminar Departamentos"
                        alertText="Desea eliminar este departamento ?"
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
