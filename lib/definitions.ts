import React, { ReactNode } from "react";

export interface IMenu {
  icon: React.ReactNode;
  text: string;
  href: string;
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

export type DepartmentType = {
  eid?: string | undefined;
  code?: string | undefined;
  name?:string | undefined;
  comercial_group_eid?:string | undefined;
  store_code_legal?:string | undefined;
  store_code_natural?:string | undefined;
}

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

export type ResponseObjDepartment = {
  success: boolean;
  detail: string;
  status_code?: string;
  total_pages?: number;
  data: [{eid?: string, code?: string, name?:string, comercial_group_eid?:string, store_code_legal?:string,store_code_natural?:string}];
};
export type ResponseObjSpecialist = {
  success: boolean;
  detail: string;
  status_code?: string;
  total_pages?: number;
  data: [{eid?: string, user_name?: string, code?:string, publish_departament_eid?:string, is_active?:boolean}];
};

export type ResponseDicDepartment = {
  success: boolean;
  detail: string;
  status_code?: string;
  total_pages?: number;
  data: {eid?: string, code?: string, name?:string, comercial_group_eid?:string, store_code_legal?:string,store_code_natural?:string};
};
