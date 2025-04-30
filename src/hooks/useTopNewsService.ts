import { TopNewsItem } from "@/Interfaces/news";
import { topNewsService } from "@/services/topNewsService";
import { useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";


const PAGE_SIZE = 10;

export const useTopNewsService = () => {

    const [newsList, setNewsList] = useState<TopNewsItem[]>([]);
    const [shortList, setshortList] = useState<TopNewsItem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
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

        console.log("newsList: ", newsList);


        useEffect(()=> {

            const batchId = Date.now();

            const start = (currentPage - 1) * PAGE_SIZE;
            const end = start + PAGE_SIZE;

            setshortList( prev => [
                ...prev, 
                ...newsList.slice(start, end).map(item => ({                    
                    ...item,
                    batch:batchId                    
                })) 
            ]);

        }, [newsList, currentPage]);

        //const target = event.target as Node;
        const scrollRef = useRef<HTMLDivElement>(null);
        const scrolled = scrollRef.current;//?.contains(target);

        console.log("scrolled: ", scrolled);

        useEffect(()=> {
          

            const showMoreItems = debounce(() => {

                const scrollTop = window.scrollY;
                const windowHeight = window.innerHeight;
                const fullHeight = scrolled?.offsetHeight;

                console.log("scrollTop: ", scrollTop);
                console.log("windowHeight: ", windowHeight);
                console.log("fullHeight: ", fullHeight);

                // If user is within 100px of the bottom
                if (fullHeight && scrollTop + windowHeight >= fullHeight - 100) {
                  setshortList(prevList =>
                    prevList.map(item => ({ ...item, animated: true }))
                  );
                  setCurrentPage(current => current + 1);
                }
              }, 300);
            
              window.addEventListener("scroll", showMoreItems);
            
              return () => {
                window.removeEventListener("scroll", showMoreItems);
              };

        }, []);

        return { shortList, loading, error, scrollRef };
}