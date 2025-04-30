import { useTopNewsService } from "@/hooks/useTopNewsService";

const TopNews = () => {

    const {shortList, loading, error, scrollRef} = useTopNewsService(); 

    if (loading) return <div  className="text-center text-[#596479] text-lg mt-10">Loading...</div>;
    if (error) return <div  className="text-center text-stockTrackerRed text-lg mt-10">{error}</div>;
    
    return (
        <div className="max-w-8xl mx-auto" ref={scrollRef}>
        {
            shortList.length > 0 ? (
                shortList.map((item) => {

                    const latestBatch = Math.max(...shortList.map(i => i.batch ?? 0));
                    const batchItems = shortList.filter(it => it.batch === latestBatch);
                    const batchIndex = batchItems.findIndex(it => it.id === item.id);
                    const style = !item.animated && item.batch === latestBatch
                    ? { animationDelay: `${batchIndex * 0.1}s`, animationFillMode: 'forwards' }
                    : {};
                    
                return (
                    <div
                    key={item.id}
                    className={`flex items-center bg-gradient-to-r from-[#f0f4f8] to-[#e8f1f8] rounded-xl p-5 mb-2 shadow-md transform transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg ${!item.animated ? 'opacity-0 animate-fade-in-up' : ''}`}
                    style={ style}
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
                )  
                })
            ):(
                <div className="text-center text-[#596479] text-lg mt-10">
                    No news available at the moment. Please check back soon.
                </div>
            )
        }            
        </div>
    );
}

export default TopNews;

