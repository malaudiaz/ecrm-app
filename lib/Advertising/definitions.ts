
export type Campaign = {
    eid: string;
    year: string;
    name: string;
  };
  
  export type ResponseCampaign = {
    success: boolean;
    detail: string;
    status_code: string;
    total_pages: number;
    data: Campaign;
  }
  
  export type ResponseCampaigns = {
    success: boolean;
    detail: string;
    status_code: string;
    total_pages: number;
    data: [Campaign];
  };
  