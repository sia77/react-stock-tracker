import { Link, useSearchParams } from 'react-router-dom';
import useSearchResult  from '@/hooks/useSearchResult';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, ArrowUp } from 'lucide-react';
import StatusMessage from '@/components/StatusMessage';
import { largeNumberFormat } from '@/utils/formaters/largeNumberFormat';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') ?? '';
    const { data:searchResult, error, isLoading:loading } = useSearchResult(query); 


    // Handle all message states early
    if (loading || error || !query.trim()) {
        return <StatusMessage loading={loading} error={error?.message} query={query} />;
    }

    const formatNumber = (num: number) => {
        return Intl.NumberFormat("en-US", { notation: "compact" }).format(num);
    };  

    return (
        <div>
            {searchResult?.map((item: any) => {

                const isNegative = item.change.startsWith("-");
                const assetType = item?.type === "Common Stock" ? 'stock' : item?.type;
                return (                    
                    <Card key={item.id} className="mb-4 p-4 border rounded-xl shadow-none transform transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
                        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center px-2 md:px-6">
                            <div>
                                <h2 className="text-lg font-semibold">{item.symbol}</h2>
                                <p className="text-sm text-gray-500">{item.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Close</p>
                                <p className="text-base font-medium flex items-center gap-1">
                                    <span className={!isNegative ? 'text-green-600' : 'text-stockTrackerRed'}>
                                        {!isNegative ? '+' : '-'}   ${item.close.toFixed(2)}
                                    </span>
                                    {!isNegative ? (
                                        <ArrowUp className="text-green-600 w-4 h-4" />
                                    ) : (
                                        <ArrowDown className="text-stockTrackerRed w-4 h-4" />
                                    )}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Market Cap</p>
                                <p className="text-base font-medium">{largeNumberFormat(item.marketCap, 'M') }</p>
                            </div>
                            {item.volume !== undefined && (
                                <div>
                                    <p className="text-sm text-gray-600">Volume</p>
                                    <p className="text-base font-medium">{formatNumber(item.volume)}</p>
                                </div>
                            )}
                            {item.high !== undefined && item.low !== undefined && (
                                <div className="col-span-1 md:col-span-1">
                                    <p className="text-sm text-gray-600">Day Range</p>
                                    <p className="text-base font-medium">
                                        ${item.low.toFixed(2)} - ${item.high.toFixed(2)}
                                    </p>
                                </div>
                            )}
                            {item.symbol !== undefined && assetType !== undefined && 
                                (<div className="md:col-start-4">
                                    <p>
                                        <Link 
                                            className ="bg-stockTrackerBlue text-white px-3 py-2 rounded-md font-bold text-sm"  
                                            to = {`/${assetType.toLowerCase()}/${item.symbol.toLowerCase()}`}
                                            >More</Link>
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

export default SearchResults;


