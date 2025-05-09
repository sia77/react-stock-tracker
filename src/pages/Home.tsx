import { AssetPerformanceCard } from "@/components/AssetPerformanceCard";
import StatusMessage from "@/components/StatusMessage";
import useStockPerformance from "@/hooks/useStockPerformance";
import { useStockPerformanceService } from "@/hooks/useStockPerformanceService";

const Home = () => {

    const MAX_NEW_ITEM:number = 6;

    //const {data, loading, error } = useStockPerformanceService();
    const { data, isLoading, error } = useStockPerformance(); 
  
    if (isLoading || error ) {
        return <StatusMessage loading={isLoading} error={error?.message} query={''} />;
    }

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[300px] md:w-[630px] lg:w-[1220px]">
                {data && (
                    <>
                        <AssetPerformanceCard title="Most Active" data={data.mostActive} maxItems={MAX_NEW_ITEM} alignment="md:justify-self-start" />
                        <AssetPerformanceCard title="Top Gainers" data={data.gainers} maxItems={MAX_NEW_ITEM} alignment="md:justify-self-center" />
                        <AssetPerformanceCard title="Top Losers" data={data.losers} maxItems={MAX_NEW_ITEM} alignment="justify-self-auto lg:justify-self-end" />
                    </>
                    )
                }

            </div>
        </div>
    );
}
export default Home;
