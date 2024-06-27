import Image from 'next/image';
import { UpdateButton } from '../UpdateButton';
import { fetchAdvertising } from '@/lib/Advertising/data';
import Status from '../Status';
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


export default async function AdvertisingTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const advertising = await fetchAdvertising(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {advertising?.map((item) => (
              <div
                key={item.invoice}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{item.invoice}</p>
                    </div>
                    <p className="text-sm text-gray-500">{item.totalAmount}</p>
                  </div>
                  <Status status={item.paymentStatus} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {item.paymentMethod}
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
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {advertising.map((item) => (
                <TableRow key={item.invoice}>
                  <TableCell className="font-medium">{item.invoice}</TableCell>
                  <TableCell>{item.paymentStatus}</TableCell>
                  <TableCell>{item.paymentMethod}</TableCell>
                  <TableCell className="text-right">{item.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>


        </div>
      </div>
    </div>
  );
}
