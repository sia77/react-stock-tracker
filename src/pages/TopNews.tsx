import { useTopNewsService } from "@/hooks/useTopNewsService";
import { ArrowRight } from "lucide-react";

const TopNews = () => {

    const {shortList, loading, error, currentPage, showMoreItems} = useTopNewsService();

    if (loading) return <div  className="text-center text-[#596479] text-lg mt-10">Loading...</div>;
    if (error) return <div  className="text-center text-stockTrackerRed text-lg mt-10">{error}</div>;

    // const showMoreItems = () => {
    //     return currentPage+1;
    // }
    
    return (
        <div className="max-w-8xl mx-auto">
        {
            shortList.length > 0 ? (
                shortList.map((item, index) => (
                <div
                key={item.id}
                className="flex items-center bg-gradient-to-r from-[#f0f4f8] to-[#e8f1f8] rounded-xl p-5 mb-5 shadow-md transform transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                    <img
                        src={item.image}
                        alt={item.headline}
                        className="w-12 h-12 rounded-full object-cover mr-5 border-2 border-stockTrackerBlue"
                    />
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[16px] text-[#0A101C] font-semibold hover:text-stockTrackerBlue transition-colors"
                    >
                        {item.headline}
                    </a>
                </div>
                ))
            ):(
                <div className="text-center text-[#596479] text-lg mt-10">
                    No news available at the moment. Please check back soon.
                </div>
            )
        }

            <div className="flex justify-center mt-8">
                <button
                    onClick={()=> showMoreItems()} 
                    className="cursor-pointer group flex items-center gap-2 px-8 py-3 rounded-full bg-stockTrackerBlue text-white font-semibold hover:bg-stockTrackerBlack transition-all shadow-md hover:shadow-xl">
                    More
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={15} />
                    </span>
                </button>
            </div>
            
        </div>
    );
}

export default TopNews;

