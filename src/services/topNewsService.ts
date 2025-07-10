import axiosInstance from "@/api/axiosInstance";
import { TopNewsItem } from "@/Interfaces/news";


let topNewsCache: TopNewsItem[] | null = null;
let cacheTimestamp: number = 0;

const CACHE_DURATION = 2 * 60 * 1000; // 2 minutes

export const topNewsService = async ():Promise<TopNewsItem[]> => {

    const now = Date.now();

    if( topNewsCache &&  (cacheTimestamp + CACHE_DURATION) >= now  ){
        return topNewsCache;
    }

    try{
        const response = await axiosInstance.get<TopNewsItem[]>('topNews');
        cacheTimestamp = now;
        topNewsCache = response.data;
        return response.data;

    }catch(err:any){
        console.error("Failed to fetch top news:", err.message || err);
        throw new Error("Could not fetch top news data");
    }
}