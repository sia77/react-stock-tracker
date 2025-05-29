
import axiosInstance from "@/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";


const fetchAssetMetrics = async(ticker:string) => {
    const {data} = await axiosInstance.get<any>('metric', {
        params : {
            ticker
        }
    });

    return data;
}

const useAssetMetricResult = (ticker: string) => {
    return useQuery({
        queryKey: ['assetMetricResult', ticker], 
        queryFn: () => fetchAssetMetrics(ticker), 
        refetchOnMount: true, // Fetch in the background when the page is loaded
        refetchOnWindowFocus: true, // Refetch if user returns to the tab
    });
};

export default useAssetMetricResult;
