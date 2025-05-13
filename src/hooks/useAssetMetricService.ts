import { getAssetMetricService } from "@/services/getAssetMetricService";
import { useEffect, useState } from "react";

export const useAssetMetricService = (ticker:string) => {

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {

        const fetchData = async () => {

            try{
                setLoading(true);
                const result = await getAssetMetricService(ticker);
                console.log("hook: ", result);

                setData(result)

            }catch(err:any){
                console.log("Asset Metric: ", err);
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }

        fetchData();

    }, []);


    return {data, loading, error}

    


}