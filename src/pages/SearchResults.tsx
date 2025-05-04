import { useSearchParams } from 'react-router-dom';
import { useSearchResult } from '@/hooks/useSearchResult';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from 'lucide-react';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') ?? '';
    const { searchResult, error, loading } = useSearchResult(query); 


    if (loading && query.trim()) return <div  className="text-center text-[#596479] text-lg mt-10">Loading...</div>;
    if (error) return <div  className="text-center text-stockTrackerRed text-lg mt-10">{error}</div>;
    if (!query.trim()) return <div className="text-center text-[#596479] text-lg mt-10">
            Please enter a search term...
            </div>;

    const formatNumber = (num: number) => {
        return Intl.NumberFormat("en-US", { notation: "compact" }).format(num);
    };  

    return (
        <div>
            {searchResult.map((item: any) => {

                const isNegative = item.change.startsWith("-");
                return (                    
                    <Card key={item.id} className="mb-4 p-4 border rounded-xl shadow-none">
                        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                            <div>
                                <h2 className="text-lg font-semibold">{item.symbol}</h2>
                                <p className="text-sm text-gray-500">{item.name}</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold text-gray-800">${item.close.toFixed(2)}</p>
                                <Badge
                                    className={`text-sm px-2 py-1 mt-1 ${
                                        isNegative ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                                    }`}
                                >
                                    {item.change}
                                </Badge>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Market Cap</p>
                                <p className="text-base font-medium">{formatNumber(item.marketCap)}</p>
                            </div>
                            {item.volume !== undefined && (
                                <div>
                                    <p className="text-sm text-gray-600">Volume</p>
                                    <p className="text-base font-medium">{formatNumber(item.volume)}</p>
                                </div>
                            )}
                            {item.high !== undefined && item.low !== undefined && (
                                <div className="col-span-2 md:col-span-1">
                                    <p className="text-sm text-gray-600">Day Range</p>
                                    <p className="text-base font-medium">
                                        ${item.low.toFixed(2)} - ${item.high.toFixed(2)}
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


