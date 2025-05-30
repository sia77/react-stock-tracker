import StatusMessage from "@/components/StatusMessage";
import { useTopNews } from "@/hooks/useTopNews";

const TopNews = () => {

    const {shortList, loading, error, sentinelRef} = useTopNews(); 

    if (loading || error ) {
        return <StatusMessage loading={loading} error={error} query={''} />;
    }
    
    return (
        <div className="max-w-8xl mx-auto">
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
                    className={`flex items-center bg-card border rounded-xl p-5 mb-2 shadow-none transform transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg ${!item.animated ? 'opacity-0 animate-fade-in-up' : ''}`}
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
            <div ref={sentinelRef} style={{ height: '1px' }} />                   
        </div>
    );
}

export default TopNews;

