import { searchAssetService } from "@/services/searchAssetService";
import { useEffect, useState } from "react";

import { AssetData } from "@/Interfaces/assets";


export const useSearchResult = (query:string):any => {
    
    const [searchResult, setSearchResult] = useState<AssetData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {

        const fetchData = async() => {

            if(!query || !query.trim()){
                setSearchResult([]);
                return;
            }

            try{
                setLoading(true);
                const response = await searchAssetService(query)
                setSearchResult(response);
            }catch(err:any){
                console.error(err);
                setError("Failed to fetch search result...");    
            }finally{
                setLoading(false);
            }
        }
        fetchData();

    },[query]);

    return {searchResult, error, loading}

}