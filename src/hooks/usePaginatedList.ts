import { TopNewsItem } from "@/Interfaces/news";
import { useEffect, useState } from "react";


export const usePaginatedList = (newsList:TopNewsItem[]) => {
    const PAGE_SIZE = 2;
    const [shortList, setshortList] = useState<TopNewsItem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

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

    const incrementPage = () => {
        setCurrentPage(prev => prev + 1);
      };

    return { shortList, currentPage, incrementPage }

}


