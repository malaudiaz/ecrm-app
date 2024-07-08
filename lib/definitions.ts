import React, { ReactNode } from "react";

export interface IMenu {
  icon: React.ReactNode;
  text: string;
  href: string;
  path: string;
}

export type AdvertisingTable = {
  invoice: string;
  paymentStatus: string;
  totalAmount: number;
  paymentMethod: "Credit" | "Cash";
};

export type CampaignType = {
  eid?: string | undefined;
  year?: string | undefined;
  name?: string | undefined;
};

export type ResponseDict = {
  success: boolean;
  detail: string;
  status_code: string;
  total_pages: number;
  data: {eid?: string, name?: string, year?:string};
}

export type ResponseObj = {
  success: boolean;
  detail: string;
  status_code?: string;
  total_pages?: number;
  data: [{eid?: string, name?: string, year?:string}];
};
