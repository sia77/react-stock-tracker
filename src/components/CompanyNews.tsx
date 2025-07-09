import useCompanyNews from "@/hooks/useCompanyNewsService"
import StatusMessage from "./StatusMessage";
import { NewsArticle } from "@/Interfaces/news";
import { toBCDate } from "@/utils/formaters/DateConvert";


export const CompanyNews:React.FC<any> = ({symbol, from, to}) => {

    const {isLoading, newsList, error} = useCompanyNews(symbol, from, to);

    if (isLoading) {
        return <StatusMessage loading={true} />;
    }
    
    if (error) {        
        return <StatusMessage error={error} />;        
    }


    return (
        <>
            <div className="font-medium text-[20px] leading-[32px]">News</div>

            {!newsList.length && <div>No news items at this time.</div> }
            <div >
                {
                    newsList.map(
                        (el:NewsArticle) => (

                            <article key={el.id} className="w-full mx-auto p-4 ">
                                <div className="flex space-x-4">
                                    
                                    {el.image ? (
                                    <img
                                        src={el.image}
                                        alt={el.headline}
                                        className="w-12 h-12 rounded-full object-cover mr-5 border-2 border-stockTrackerBlue"
                                    />
                                    ) : (
                                    <div className="w-12 h-12 mr-5 flex items-center justify-center border-2 border-stockTrackerBlue rounded-full bg-gray-100 text-xs font-semibold text-stockTrackerBlue">
                                        {el.source.substring(0,7)}
                                    </div>
                                    )}
                                    <div className="flex flex-col justify-between">
                                    
                                    <a href={el.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-stockTrackerBlue hover:underline">
                                        {el.headline}
                                    </a>
                                    
                                    <div className="text-sm text-gray-500 mt-1">
                                        {toBCDate(el.datetime)} &nbsp;&bull;&nbsp; {el.source}
                                    </div>
                                    
                                    <p className="mt-2 text-gray-700 text-sm line-clamp-3">
                                        {el.summary}
                                    </p>
                                    </div>
                                </div>
                            </article>
                        )
                    )
                }
            </div>      
        
        </>
    )


}