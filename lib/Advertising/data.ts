'use server'

import axios from "axios";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import * as z from "zod";
import { redirect } from 'next/navigation';

import { AdvertisingTable, ResponseObj, ResponseDict, ResponseObjDepartment } from "../definitions";
import { CampaignSchema } from "@/schemas/Advertising";


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

const config = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "accept-Language": "en",
    "Authorization": ""
  }
};

export async function fetchCampaign(query: string, currentPage: number, perPage: number) {

  const session = await auth();
 
  config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;

  const url = `${process.env.NEXT_PUBLIC_API_URL}publishcampaign?page=${currentPage}&per_page=${perPage}&query=${query}`;

  try {
    const response =  await axios.get(url, config);

    const data = <ResponseObj>response.data;

    if (!data.success) {
      throw new Error(data.detail);      
    }

    return data;
  } catch (error) {
      // console.error('Database Error:', error);
      revalidatePath('/advertising/campaign');
  }
}

export async function deleteCampaign(id: string) {

  const session = await auth();
 
  config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;

  const url = `${process.env.NEXT_PUBLIC_API_URL}publishcampaign/${id}`;

  try {
    const response =  await axios.delete(url, config);

    const data = <ResponseObj>response.data;

    if (!data.success) {
      throw new Error(data.detail);      
    }

    revalidatePath("/advertising/campaign");
    return data;
  } catch (error) {
      console.error('Database Error:', error);
    throw new Error('Failed to delete campaign.');
  }
}

export const saveCampaign = async (values: z.infer<typeof CampaignSchema>) => {
  const validateFields = CampaignSchema.safeParse(values);

  if (!validateFields.success) {
      return {error: "Error en los datos"};
  }

  const session = await auth();
 
  config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;

  const url = `${process.env.NEXT_PUBLIC_API_URL}publishcampaign`;

  try {
    const response =  await axios.post(url, validateFields.data, config);

    const data = <ResponseObj>response.data;

    if (!data.success) {
      throw new Error(data.detail);      
    }

    return data;
  } catch (error) {
      console.error('Database Error:', error);
    throw new Error('Failed to create campaign.');
  }
}

export async function fetchCampaignById(id: string) {

  const session = await auth();
 
  config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;

  const url = `${process.env.NEXT_PUBLIC_API_URL}publishcampaign/${id}`;

  try {
    const response =  await axios.get(url, config);

    const data = <ResponseDict>response.data;

    if (!data.success) {
      throw new Error(data.detail);      
    }

    return data;
  } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to find campaign.');
  }
}

export const updateCampaign = async (values: z.infer<typeof CampaignSchema>) => {
  const validateFields = CampaignSchema.safeParse(values);

  if (!validateFields.success) {
      return {error: "Error en los datos"};
  }

  const session = await auth();
 
  config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;

  const id = validateFields.data.eid;

  const url = `${process.env.NEXT_PUBLIC_API_URL}publishcampaign/${id}`;

  try {
    
    await axios.put(url, {name: validateFields.data.name, year: validateFields.data.year}, config); 
  
  } catch (error) {
      console.error('Database Error:', error);
    throw new Error('Failed to create campaign.');
  }

  revalidatePath('/advertising/campaign');
  redirect('/advertising/campaign');

}

export async function fetchDepartments(query: string, currentPage: number, perPage: number) {

  const session = await auth();
 
  config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;

  const url = `${process.env.NEXT_PUBLIC_API_URL}publishdepartament?page=${currentPage}&per_page=${perPage}&query=${query}`;

  try {
    const response =  await axios.get(url, config);

    const data = <ResponseObjDepartment>response.data;

    if (!data.success) {
      throw new Error(data.detail);      
    }

    return data;
  } catch (error) {
      // console.error('Database Error:', error);
      revalidatePath('/advertising/departments');
  }
}
