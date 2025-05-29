
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
        refetchOnMount: true, // Fetch in the background when the page is loaded
        refetchOnWindowFocus: true, // Refetch if user returns to the tab
    });
};
    
export default useSearchResult;
