import axiosInstance from "@/api/axiosInstance";
import { CompanyNewsResponse } from "@/Interfaces/news";

const companyNewsService = async (symbol:string, from:string,to:string):Promise<CompanyNewsResponse> => {

    try{

        const {data} = await axiosInstance.get<CompanyNewsResponse>('companyNews', {
            params:{
                symbol:symbol,
                from:from,
                to:to
            }
        });
        return data;

    }
    catch(err:any){
        console.error("Failed to fetch company news:", err.message || err);
        throw new Error("Could not fetch company news data");
    }
}

export default companyNewsService;