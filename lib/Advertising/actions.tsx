'use server'

import axios from "axios";
import { auth } from "@/auth";
import * as z from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

import { CampaignSchema } from "@/schemas/Advertising";

const config = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "accept-Language": "en",
      "Authorization": ""
    }
  };
  
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
  