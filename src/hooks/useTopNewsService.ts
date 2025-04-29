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
                    const fetchedItems = await topNewsService();
                    const newItems = fetchedItems.map(item => ({ ...item, animated: false }));
                    setNewsList(prevList => [...prevList, ...newItems]);

                    console.log("fetchedItems: ", fetchedItems);
                    
                }catch(err){
                    console.error(err);
                    setError("Failed to fetch top news");
                }finally{
                    setLoading(false);
                }
            }
            
            fetchData();
        }, []);

        console.log("newsList: ", newsList);

        const showMoreItems = () => {
            setNewsList(prevList =>
                prevList.map(item => ({ ...item, animated: true }))
              );
            setCurrentPage(currentPage => currentPage + 1 )
        }        

        const shortList = newsList.slice(0, currentPage * 10);

        console.log("shortList: ", shortList );

        return { shortList, loading, error, currentPage, showMoreItems };
}