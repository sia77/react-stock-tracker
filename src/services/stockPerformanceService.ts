
import axiosInstance from "@/api/axiosInstance";
import { assetPerformance } from "@/Interfaces/marketPerformance";

let cashedPeformance:assetPerformance = {gainers:[], losers:[], mostActive:[]};
let cacheTimestamp: number = 0;

let CACHE_DURATION = 1 * 60 * 1000;


export const stockPerformanceService = async (): Promise<assetPerformance> => {
  const now = Date.now()

  if(cashedPeformance && (cacheTimestamp + CACHE_DURATION) >= now ){
    return cashedPeformance;
  }

  const response = await axiosInstance.get<assetPerformance>('marketPerformance');
  cacheTimestamp = now;
  cashedPeformance = response.data;
  return response.data;
};


