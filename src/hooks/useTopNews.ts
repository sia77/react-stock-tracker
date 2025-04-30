import { useInfiniteScrollObserver } from "./useInfiniteScrollObserver";
import { usePaginatedList } from "./usePaginatedList";
import { useTopNewsService } from "./useTopNewsService";

export const useTopNews = () => {
     const { newsList, loading, error } = useTopNewsService();

     const { shortList, incrementPage } = usePaginatedList(newsList);
     const {sentinelRef} = useInfiniteScrollObserver(incrementPage, shortList);
   
     return { shortList, loading, error, sentinelRef };
  };