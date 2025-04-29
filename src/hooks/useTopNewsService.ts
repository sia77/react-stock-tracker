import { TopNewsItem } from "@/Interfaces/news";
import { topNewsService } from "@/services/topNewsService";
import { useEffect, useState } from "react";


export const useTopNewsService = () => {

    const [newsList, setNewsList] = useState<TopNewsItem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
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

        const showMoreItems = () => {
            setCurrentPage(currentPage => currentPage + 1 )
        }        

        const shortList = newsList.slice(0, currentPage * 10);

        return { shortList, loading, error, currentPage, showMoreItems };
}