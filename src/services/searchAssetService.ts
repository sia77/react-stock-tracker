import axiosInstance from "@/api/axiosInstance";
import { AssetData } from "@/Interfaces/assets";

export const searchAssetService = async (query:string):Promise<AssetData[]> =>{

    let cache = new Map();

    if(cache.has(query.trim())){
        return cache.get(query);
    }

    try{
        const result = await axiosInstance.get<AssetData[]>(`${import.meta.env.VITE_NETLIFY_FUNCS}searchAssets?search=${query}`);
        cache.set(query,result.data );
        return result.data;

    }catch(err){
        console.log(err);
        throw err;
    }
}
