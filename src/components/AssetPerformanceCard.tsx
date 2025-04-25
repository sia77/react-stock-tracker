import { assetDelta } from "@/Interfaces/marketPerformance";
import { Card, CardContent, CardHeader } from "./ui/card"

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
            <CardContent>
                {   
                    data.slice(0, maxItems).map((item) => (

                        <div key={item.ticker} className="flex justify-between mb-[12px] text-[14px]">
                            <div >{item.ticker}</div>
                            <div className={item.delta > 0 ? 'text-green-600':'text-stockTrackerRed'}> 
                                {item.delta > 0 ? '+':''}{item.delta}%
                            </div>
                        </div>   
                    ))
                }
            </CardContent>
        </Card>
    )
}
