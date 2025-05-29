//This a reimplementation using 
import axiosInstance from '@/api/axiosInstance';
import { assetPerformance } from '@/Interfaces/marketPerformance';
import { useQuery } from '@tanstack/react-query';


const fetchStockPerformance = async (): Promise<assetPerformance> => {
  const { data } = await axiosInstance.get<assetPerformance>('marketPerformance');
  return data;
};

const useStockPerformance = () => {
  return useQuery({
    queryKey: ['stockPerformance'],
    queryFn: fetchStockPerformance,
    refetchOnMount: true, // Fetch in the background when the page is loaded
    refetchOnWindowFocus: true, // Refetch if user returns to the tab
  });
};

export default useStockPerformance;