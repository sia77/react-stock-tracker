
import { assetPerformance } from "@/Interfaces/marketPerformance";
import axios from "axios"; 

const url = `${import.meta.env.VITE_NETLIFY_FUNCS}marketPerformance`; 
  
export const stockPerformanceService = async (): Promise<assetPerformance> => {
  const response = await axios.get<assetPerformance>(url);
  return response.data;
};


