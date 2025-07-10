import axiosInstance from "@/api/axiosInstance";
import { CompanyNewsResponse } from "@/Interfaces/news";

const cache = new Map();

const companyNewsService = async (symbol:string, from:string,to:string):Promise<CompanyNewsResponse> => {

    
    const cacheKey = `${symbol}_${from}_${to}`;

    if(cache.has(cacheKey)){
        return cache.get(cacheKey);
    }

    try{        

        const {data} = await axiosInstance.get<CompanyNewsResponse>('companyNews', {
            params:{
                symbol:symbol,
                from:from,
                to:to
            }
        });
        cache.set(cacheKey, data);
        return data;

    }
    catch(err:any){
        console.error("Failed to fetch company news:", err.message || err);
        throw new Error("Could not fetch company news data");
    }
}

export default companyNewsService;