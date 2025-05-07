import axiosInstance from "@/api/axiosInstance";
import { HistoricalBarsResponse, HistoricBarRequest } from "@/Interfaces/historicBarData";


export const assetHistoricalBarService = async (request:HistoricBarRequest):Promise<HistoricalBarsResponse> =>{    

    const {ticker, timeFrame, start, end, limit} = request;
    try{

        const result = await axiosInstance.get<HistoricalBarsResponse>(`historicalBar`,{
            params:{
                ticker,
                timeFrame,
                start,
                end,
                limit
            }
        });
       
        return result.data;

    }catch(err:any){
        throw err;
    }
}