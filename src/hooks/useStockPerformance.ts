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
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

export default useStockPerformance;