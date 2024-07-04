import Image from 'next/image';
import { UpdateButton } from '../UpdateButton';
import { DeleteButton } from '../DeleteButton';
import { fetchAdvertising } from '@/lib/Advertising/data';
import { deleteCampaign } from '@/lib/Advertising/data';
import Status from '../Status';
import {
  Table,
  TableBody,
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
        <div className="rounded-lg bg-neutral-100 p-2 md:pt-0">

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

          <Table className="hidden md:table w-full text-neutral-900">
            <TableHeader className='className="rounded-lg text-left text-sm font-normal"'>
              <TableRow className='border-neutral-200'>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">Invoice</TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">Status</TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">Method</TableHead>
                <TableHead className="px-4 py-5 font-medium sm:pl-6">Amount</TableHead>
                <TableHead className="relative py-3 pl-6 pr-3"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {advertising.map((item) => (
                <TableRow 
                  key={item.invoice}                   
                  className="w-full border-b border-b-neutral-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{item.invoice}</TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{item.paymentStatus}</TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{item.paymentMethod}</TableCell>
                  <TableCell className="whitespace-nowrap py-3 pl-6 pr-3">{item.totalAmount}</TableCell>
                  <TableCell className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <div className="flex justify-end gap-3">
                      <UpdateButton href={`/advertising/${item.invoice}/edit`} />
                      <DeleteButton id={"22"} onDeleted={deleteCampaign} />
                    </div>
                  </TableCell>

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
