
import { AssetData } from "@/Interfaces/assets";
import axiosInstance from "@/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";


const fetchStockPerformance = async (query:string): Promise<AssetData[]> => {
    const { data } = await axiosInstance.get<AssetData[]>(`searchAssets?search=${query}`);         
    return data;
};
const useSearchResult = (query: string) => {
    return useQuery({
        queryKey: ['searchResult', query], 
        queryFn: () => fetchStockPerformance(query), 
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        retry: 2,
        refetchOnWindowFocus: false,
    });
};
    
export default useSearchResult;
