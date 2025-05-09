import Chart from '@/components/Chart';
import StatusMessage from '@/components/StatusMessage';
import { useAssetHistoricalBarService } from '@/hooks/useAssetHistoricalBarService';
import { useAssetMetricService } from '@/hooks/useAssetMetricService';
import { useHistoricBarRequest } from '@/hooks/useHistoricBarRequest';
//import { Table } from 'lucide-react';
import { useParams } from 'react-router-dom';


export const AssetDetail = () => {

    const { type, ticker } = useParams();

    if(!ticker || !type) return <StatusMessage ticker={ticker}  type = {type} />;
    
    const request = useHistoricBarRequest(ticker);

    const { data:dataBar, loading:loadingBar, error:errorBar} = useAssetHistoricalBarService(request);
    const { data:metricData, loading:metricLoading, error:metricError} = useAssetMetricService(ticker);
    
    // Handle all message states early
    if (loadingBar || metricLoading) {
        return <StatusMessage loading={true} />;
    }
    
    if (errorBar || metricError) {
        return <StatusMessage error={errorBar || metricError} />;
    }

    console.log("metricData: ", metricData);

    console.log("data: ", dataBar);

    const {bars}= dataBar;

    //console.log("bars:", bars);

  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className='col-span-2'>
            <Chart data={bars} />
        </div>
        {/* <div className=''>
            <Table />
        </div> */}
      </div>
    );
  };