
import { useEffect, useState } from "react";
import axios from "axios";
import { assetPerformance } from "@/Interfaces/marketPerformance";
import { AssetPerformanceCard } from "@/components/AssetPerformanceCard";

const Home = () => {

    const initialAssetPerformance: assetPerformance = {
        gainers: [],
        losers: [],
        mostActive: []
    };
    const [data, setData] = useState<assetPerformance>(initialAssetPerformance);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const MAX_NEW_ITEM:number = 6;
    
  
    useEffect(() => {    
      const url = `${import.meta.env.VITE_NETLIFY_FUNCS}marketPerformance`; 
  
      axios
        .get(url)
        .then((response) => {
          setData(response.data); // Axios automatically parses JSON for you
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []); 
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[300px] md:w-[630px] lg:w-[1220px]">

                <AssetPerformanceCard title="Most Active" data={data.mostActive} maxItems={MAX_NEW_ITEM} alignment={'md:justify-self-start'} />
                <AssetPerformanceCard title="Most Gainers" data={data.gainers} maxItems={MAX_NEW_ITEM} alignment={'md:justify-self-center'} />
                <AssetPerformanceCard title="Most Losers" data={data.losers} maxItems={MAX_NEW_ITEM} alignment={'justify-self-auto lg:justify-self-end'}/>

            </div>
        </div>
    );
}
export default Home;
