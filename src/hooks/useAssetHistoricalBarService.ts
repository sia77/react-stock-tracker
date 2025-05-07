import { HistoricBarRequest } from "@/Interfaces/historicBarData";
import { assetHistoricalBarService } from "@/services/assetHistoricalBarService";
import { useEffect, useState } from "react"


export const useAssetHistoricalBarService = (request:HistoricBarRequest) =>{

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {

        const fetchHistoricalBars = async () => {
            try{
                setLoading(true);
                const result = await assetHistoricalBarService(request);    
                setData(result);    
            }catch(err:any){
                console.log("Historical Bar: ", err);
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }

        fetchHistoricalBars()

    }, []);

    return { data, loading, error}

}