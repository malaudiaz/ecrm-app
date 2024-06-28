import axios from "axios";

const ITEMS_PER_PAGE = 10;

export type AdvertisingTable = {
  invoice: string;
  paymentStatus: string;
  totalAmount: number;
  paymentMethod: "Credit" | "Cash";
};

export async function fetchAdvertising(query: string, currentPage: number) {
  const advertising = <AdvertisingTable[]>[
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: 250.0,
      paymentMethod: "Credit",
    },
    {
      invoice: "INV002",
      paymentStatus: "Paid",
      totalAmount: 150.0,
      paymentMethod: "Cash",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  return advertising;
}

export type CampaignTable = {
  eid: string;
  year: string;
  name: string;
};

export async function fetchCampaign(query: string, currentPage: number) {

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "accept-Language": "en",
      // "Authorization": `Bearer ${token}`,
    }
  };

  // const url = `${process.env.NEXT_PUBLIC_API_URL}publishcampaign?page=${1}&per_page=${6}}`;

  const url = 'http://127.0.0.1:5000/api/v1/publishcampaign/?page=1&per_page=6'


  try {

    const response =  await axios.get(url, config);

    const data = <CampaignTable[]>response.data.data;

    // console.log(data);

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
  

}