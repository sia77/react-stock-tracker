import { assetPerformance } from "@/Interfaces/marketPerformance";
import { stockPerformanceService } from "@/services/stockPerformanceService";
import { useEffect, useState } from "react"


export const useStockPerformanceService = () => {

    const [data, setData] = useState<assetPerformance | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const response = await stockPerformanceService();
            setData(response);
          } catch (err:any) {
            console.error(err);
            setError(`Failed to fetch stock performance: ${err.message}`);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
      return { data, loading, error };

}