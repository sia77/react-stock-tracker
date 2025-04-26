
import axiosInstance from "@/api/axiosInstance";
import { assetPerformance } from "@/Interfaces/marketPerformance";


export const stockPerformanceService = async (): Promise<assetPerformance> => {
  const response = await axiosInstance.get<assetPerformance>('marketPerformance');
  return response.data;
};


