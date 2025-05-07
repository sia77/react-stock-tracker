
import axiosInstance from "@/api/axiosInstance";
import { assetPerformance } from "@/Interfaces/marketPerformance";

let cashedPeformance:assetPerformance = {gainers:[], losers:[], mostActive:[]};
let cacheTimestamp: number = 0;

let CACHE_DURATION = 1 * 60 * 1000;


export const stockPerformanceService = async (): Promise<assetPerformance> => {
  const now = Date.now();

  if (cashedPeformance && (cacheTimestamp + CACHE_DURATION) >= now) {
    return cashedPeformance;
  }

  try {
    const response = await axiosInstance.get<assetPerformance>('marketPerformance');
    cacheTimestamp = now;
    cashedPeformance = response.data;
    return response.data;
  } catch (err: any) {
    
    console.error("Failed to fetch market performance:", err.message || err);
    throw new Error("Could not fetch stock performance data");
  }
};


