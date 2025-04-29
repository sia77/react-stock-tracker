import { TopNewsItem } from "@/Interfaces/news";
import { topNewsService } from "@/services/topNewsService";
import { useEffect, useState } from "react"



export const useTopNewsService = () => {

    const [newsList, setNewsList] = useState<TopNewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(
        () => {
            const fetchData = async () => {

                try{
                    const newsList = await topNewsService()
                    setNewsList(newsList);
                }catch(err){
                    console.error(err);
                    setError("Failed to fetch top news");
                }finally{
                    setLoading(false);
                }
            }
            
            fetchData();
        }, []);

        return { newsList, loading, error };
}