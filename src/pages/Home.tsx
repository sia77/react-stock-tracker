import { AssetPerformanceCard } from "@/components/AssetPerformanceCard";
import { useStockPerformanceService } from "@/hooks/useStockPerformanceService";

const Home = () => {

    const MAX_NEW_ITEM:number = 6;

    const {data, loading, error } = useStockPerformanceService();
 
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[300px] md:w-[630px] lg:w-[1220px]">
                {data && (
                    <>
                        <AssetPerformanceCard title="Most Active" data={data.mostActive} maxItems={MAX_NEW_ITEM} alignment="md:justify-self-start" />
                        <AssetPerformanceCard title="Most Gainers" data={data.gainers} maxItems={MAX_NEW_ITEM} alignment="md:justify-self-center" />
                        <AssetPerformanceCard title="Most Losers" data={data.losers} maxItems={MAX_NEW_ITEM} alignment="justify-self-auto lg:justify-self-end" />
                    </>
                    )
                }

            </div>
        </div>
    );
}
export default Home;
