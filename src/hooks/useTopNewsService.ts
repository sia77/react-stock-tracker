import { TopNewsItem } from "@/Interfaces/news";
import { topNewsService } from "@/services/topNewsService";
import { useEffect, useState } from "react";

export const useTopNewsService = () => {

    const [newsList, setNewsList] = useState<TopNewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(
        () => {
            const fetchData = async () => {
                try{
                    const fetchedItems = await topNewsService();
                    const newItems = fetchedItems
                        .map(
                            item => ({ 
                                    ...item, 
                                    animated: false,
                                }));
                    setNewsList(prevList => [...prevList, ...newItems]);
                    
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
