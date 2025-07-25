import Chart from '@/components/Chart';
import { CompanyNews } from '@/components/CompanyNews';
import MetricsTable from '@/components/MetricsTable';
import StatusMessage from '@/components/StatusMessage';
import { Card, CardContent } from '@/components/ui/card';
import { useAssetHistoricalBar } from '@/hooks/useAssetHistoricalBar';
import useAssetMetricResult  from '@/hooks/useAssetMetricResult';
import { useHistoricBarRequest } from '@/hooks/useHistoricBarRequest';
import useSearchResult from '@/hooks/useSearchResult';
import { AssetData } from '@/Interfaces/assets';
import { currencySymbol } from '@/utils/formaters/currencySymbol';
import { toBCDate } from '@/utils/formaters/DateConvert';
import { useParams } from 'react-router-dom';


export const AssetDetail = () => {

    const { type, ticker } = useParams();
    if(!ticker || !type) return <StatusMessage ticker={ticker}  type = {type} />;
    
    const request = useHistoricBarRequest(ticker);
    const nowTimeStamp = Math.floor(Date.now() / 1000);

    const { data:dataBar, isLoading:loadingBar, error:errorBar} = useAssetHistoricalBar(request);
    const { data:metricData, isLoading:metricLoading, error:metricError} = useAssetMetricResult(ticker.toUpperCase());
    const { data:searchData, isLoading:searchLoading, error:searchError} = useSearchResult(ticker.toUpperCase());
    
    // Handle all message states early
    if (loadingBar || metricLoading || searchLoading) {
        return <StatusMessage loading={true} />;
    }
    
    if (errorBar || metricError || searchError) {

        const rawError = errorBar || metricError || searchError;

        const errorMessage =
          typeof rawError === 'string'
            ? rawError
            : rawError instanceof Error
            ? rawError.message
            : null;
        
        
        return <StatusMessage error={errorMessage} />;
        
    }



    //console.log("searchData1213: ", searchData);

    const foundItem = searchData?.find((item:AssetData) => item.symbol.toUpperCase() === ticker.toUpperCase())

    //console.log("metricData: ", metricData);

     //console.log("dataBar: ", dataBar);

    //console.log("foundItem: ", foundItem);

    const bars = dataBar?.bars;


    const metricPackage = {

        mrkCap: foundItem && foundItem.marketCap,
        high: foundItem && foundItem.high,
        low: foundItem && foundItem.low,
        open: foundItem && foundItem.open,
        close: foundItem && foundItem.close,
        prevC: foundItem && foundItem.prevC, 
        volume: foundItem && foundItem.volume, 
        shareOut: foundItem && foundItem.shareOutstanding,
        ipo: foundItem && foundItem.ipo,
        _52WeekHigh: metricData.metric['52WeekHigh'],
        _52WeekLow: metricData.metric['52WeekLow'],
        beta: metricData.metric.beta, 
        epsTTM: metricData.metric.epsTTM,
        currentDividendYieldTTM: metricData.metric.currentDividendYieldTTM,
        peTTM: metricData.metric.peTTM,
        dividendYieldIndicatedAnnual: metricData.metric.dividendYieldIndicatedAnnual,
        dividendPerShareTTM: metricData.metric.dividendPerShareTTM,

    };

    //console.log("metricPackage: ", metricPackage);
  
    return (
        <>
            <div>
                <Card className='mb-4 p-4 border rounded-xl shadow-none'>
                    <CardContent className='px-2'>
                        <h2 className="pl-0">
                            <div className="flex items-center">
                                <div className="mr-2">
                                    <a target="_blank" href={foundItem?.weburl}>
                                        <div className="bg-black text-white text-[12px] font-semibold w-[45px] h-[45px] rounded-full border-2 border-stockTrackerBlue flex justify-center items-center"> 
                                            {foundItem?.symbol} 
                                        </div>
                                    </a>
                                </div>
                                <div className="font-medium text-[20px] leading-[32px]"> 
                                {foundItem?.name}
                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <div className="mr-1 font-medium text-[20px] leading-[32px]">{currencySymbol(foundItem?.currency) || '$'}{foundItem?.close}</div>
                                <div className="text-sm">{foundItem?.currency}</div>
                            </div>
                        </h2>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className='col-span-2 md:col-span-1'>
                    <Card className='mb-4 p-4 border rounded-xl shadow-none'>
                        <CardContent className='@container px-1 @sm:px-2 @md:px-6 mt-3 @md:mt-0'>
                            <Chart data={bars} height={350} />
                        </CardContent>
                    </Card>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <Card className='mb-4 p-4 border rounded-xl shadow-none'>
                        <CardContent className='@container px-1 @sm:px-2 @md:px-6 mt-3 @md:mt-0'>
                                                
                            <MetricsTable metricPackage = {metricPackage} height={365}  />
                        </CardContent>
                    </Card>                    
                </div>
            </div>
            <div  className='col-span-2'>
                <Card className='mb-4 p-4 border rounded-xl shadow-none'>
                    <CardContent className='@container px-1 @sm:px-2 @md:px-6 mt-3 @md:mt-0'>                                                
                        <CompanyNews symbol={ticker} from ={toBCDate(nowTimeStamp)} to = {toBCDate(nowTimeStamp)} />
                    </CardContent>
                </Card>
            </div>
        </>

    );
  };