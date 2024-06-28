import Image from 'next/image';
import { UpdateButton } from '../../UpdateButton';
import { fetchCampaign } from '@/lib/Advertising/data';
import Status from '../../Status';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default async function CampaignTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const campaign = await fetchCampaign(query, currentPage);

  console.log(campaign);


  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {campaign?.map((item) => (
              <div
                key={item.eid}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{item.year}</p>
                    </div>
                    <p className="text-sm text-gray-500">{item.name}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <UpdateButton id={invoice.id} /> */}
                    {/* <DeleteInvoice id={invoice.id} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Table className="hidden md:table w-full text-gray-900">
            <TableCaption>Listado de las publicidades recientes</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Año</TableHead>
                <TableHead>Nombre</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaign.map((item) => (
                <TableRow key={item.eid}>
                  <TableCell className="font-medium">{item.year}</TableCell>
                  <TableCell>{item.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </div>
      </div>
    </div>
  );
}
