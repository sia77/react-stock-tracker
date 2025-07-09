import { CompanyNewsResponse } from '@/Interfaces/news';
import companyNewsService from './../services/companyNewsService';
import { useEffect, useState } from "react";


const useCompanyNews = (symbol:string, from:string, to:string) => {

    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [newsList, setNewsList] = useState<CompanyNewsResponse>([]);
    const [error, setError] = useState<string>('');

    useEffect(()=>{

        const fetchNews = async () =>{

            try{
                setIsLoading(true);
                setNewsList(await companyNewsService(symbol, from, to));
            }catch(err:any){
                console.error(err);
                setError(`Failed to fetch company news:  + ${err.message}`);
            }finally{
                setIsLoading(false);
            }
        }

        fetchNews();

    }, []);

    return { newsList, isLoading, error };
}

export default useCompanyNews;

