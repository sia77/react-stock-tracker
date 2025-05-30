import axiosInstance from "@/api/axiosInstance";
import { HistoricalBarsResponse, HistoricBarRequest } from "@/Interfaces/historicBarData";

import { useQuery } from "@tanstack/react-query";

const fetchassetHistoricalBar = async (request:HistoricBarRequest) => {

    const {ticker, timeFrame, start, end, limit} = request;

    const {data} = await axiosInstance.get<HistoricalBarsResponse>(`historicalBar`,{
        params:{
            ticker,
            timeFrame,
            start,
            end,
            limit
        }
    });
   
    return data;
} 

const useAssetHistoricalBar = (request:HistoricBarRequest) => {

    return useQuery({
        queryKey: ['historicalBar', request], 
        queryFn: () => fetchassetHistoricalBar(request), 
        refetchOnMount: true, // Fetch in the background when the page is loaded
        refetchOnWindowFocus: true, // Refetch if user returns to the tab
    });

}

export {useAssetHistoricalBar};


