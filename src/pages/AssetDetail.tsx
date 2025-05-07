import Chart from '@/components/Chart';
import StatusMessage from '@/components/StatusMessage';
import { useAssetHistoricalBarService } from '@/hooks/useAssetHistoricalBarService';
import { useHistoricBarRequest } from '@/hooks/useHistoricBarRequest';
import { useParams } from 'react-router-dom';


export const AssetDetail = () => {

    const { type, ticker } = useParams();

    if(!ticker || !type) return <StatusMessage ticker={ticker}  type = {type} />;
    
    const request = useHistoricBarRequest(ticker);

    const { data, loading, error} = useAssetHistoricalBarService(request);
    
    // Handle all message states early
    if (loading || error ) {
        return <StatusMessage loading = {loading} error = {error} />;
    }

    const {bars}= data;

    console.log("bars:", bars);

  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className='col-span-2'>
            <Chart data={bars} />
        </div>
        {/* <div>
            <div className='w-[660px] h-[350px]'></div>
        </div> */}
        
      </div>
    );
  };