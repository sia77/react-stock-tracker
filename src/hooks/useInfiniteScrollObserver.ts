import { TopNewsItem } from "@/Interfaces/news";
import { useEffect, useRef, useState } from "react";



export const useInfiniteScrollObserver = (
    incrementPage: () => void,
    shortList1:TopNewsItem[]) => {

    const sentinelRef = useRef<HTMLDivElement>(null);
    // @ts-ignore
    const [shortList, setshortList] = useState<TopNewsItem[]>(shortList1);


    const showMoreItems = () => {
        setshortList(prevList =>
            prevList.map(item => ({ ...item, animated: true }))
        );
        incrementPage();
    };

    useEffect(() => {       

        const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting) {
                    showMoreItems();
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 1.0,
            }
        );
    
        const current = sentinelRef.current;
        if (current) observer.observe(current);
    
        return () => {
          if (current) observer.unobserve(current);
        };
    }, [showMoreItems]);

    return { sentinelRef };

}





