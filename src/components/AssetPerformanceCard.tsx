import { assetDelta } from "@/Interfaces/marketPerformance";
import { Card, CardContent, CardHeader } from "./ui/card";
import CountUp from 'react-countup';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface AssetListCardProps {
    title: string;
    data: assetDelta[];
    maxItems?: number;
    alignment?:string;
  }

export const AssetPerformanceCard = ({title, data, maxItems, alignment}:AssetListCardProps) => {

    return (

        <Card className={`w-[300px] rounded-[3px] py-0 gap-4 shadow-none ${alignment}`}>
            <CardHeader className={`bg-stockTrackerBlack text-white p-[16px] gap-0`}>
                <h4 className="text-white">{title}</h4>                     
            </CardHeader>
            <CardContent className="px-2">
                {   
                    data.slice(0, maxItems).map((item) => (

                        <div key={item.ticker} className="flex justify-between mb-[12px] text-[14px] px-2 transition-colors duration-200 hover:bg-gray-100">
                            <div >{item.ticker}</div>
                            <div className="flex items-center gap-1">
                                {item.delta > 0 ? (
                                    <ArrowUpRight className="text-green-600 w-4 h-4" />
                                ) : (
                                    <ArrowDownRight className="text-stockTrackerRed w-4 h-4" />
                                )}
                                <span className={item.delta > 0 ? 'text-green-600' : 'text-stockTrackerRed'}>
                                    {item.delta > 0 ? '+' : ''}<CountUp end={item.delta} duration={3} decimals={2} suffix="%" />
                                </span>
                            </div>
                            {/* <div className={item.delta > 0 ? 'text-green-600':'text-stockTrackerRed'}> 
                                {item.delta > 0 ? '+':''}{item.delta}%
                            </div> */}
                        </div>   
                    ))
                }
            </CardContent>
        </Card>
    )
}
