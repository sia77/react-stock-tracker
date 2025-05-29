import { largeNumberFormat } from "@/utils/formaters/largeNumberFormat";

const MetricsTable = ({metricPackage, height}:any) => {


    return (
        <div className={`grid grid-cols-2 gap-4`} style={{ height: `${height}px` }}>

            { metricPackage?.mrkCap && (
                <div className='grid grid-cols-2 gap-1 items-center text-sm  border-b border-default'>
                    <div className="pl-2">Mrk Cap</div>
                    <div className="font-semibold text-right pr-2">{ largeNumberFormat(metricPackage.mrkCap, 'M') }</div>
                </div>
            )} 

            {/* <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                <div className="pl-2">Assets</div>
                <div className="pl-2">xxx</div>
            </div> */}

            { metricPackage?.epsTTM && (
                <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                    <div className="pl-2">EPS (ttm)</div>
                    <div className="font-semibold text-right pr-2">{ metricPackage.epsTTM.toFixed(2) }</div>
                </div>
            )}

            {
                // metricPackage?.expense && (
                //     <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                //         <div className="pl-2">Expense Ratio</div>
                //         <div className="pl-2">xxx</div>
                //     </div>
                // )
            }

            {metricPackage?.open && (
                <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                    <div className="pl-2">Open</div>
                    <div className="font-semibold text-right pr-2">{metricPackage.open.toFixed(2)}</div>
                </div>
            )}



            { metricPackage?.peTTM && (
                <div className='grid grid-cols-4 gap-1 items-center text-sm border-b border-default'>
                    <div className="pl-2 col-span-3">PE Ratio (ttm)</div>
                    <div className="font-semibold text-right pr-2 col-span-1">{ metricPackage.peTTM.toFixed(2) }</div>
                </div>
                )
            }

            { metricPackage?.prevC && (
                <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                    <div className="pl-2">Prv Close</div>
                    <div className="font-semibold text-right pr-2">{metricPackage.prevC.toFixed(2)}</div>
                </div>
                )
            } 

            { metricPackage?.shareOut && (
                <div className='grid grid-cols-4 gap-1 items-center text-sm border-b border-default'>
                    <div className="pl-2 col-span-3">Shares Out</div>
                    <div className="font-semibold text-right pr-2 col-span-1">{largeNumberFormat(metricPackage.shareOut, 'M')}</div>
                </div>
                )
            }

            { metricPackage?.volume && (
                <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                    <div className="pl-2">Volume</div>
                    <div className="font-semibold text-right pr-2">{ largeNumberFormat(metricPackage.volume) }</div>
                </div>
                )
            }

            { metricPackage?.high && metricPackage?.low && (
                <div className='grid grid-cols-4 gap-1 items-center text-sm border-b border-default'>
                    <div className="pl-2 col-span-1">Daily</div>
                    <div className="font-semibold text-right pr-2 col-span-3">{metricPackage.low.toFixed(2)} - {metricPackage.high.toFixed(2)} </div>
                </div>
            )}


            {   metricPackage?.dividendPerShareTTM
                && (
                    <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                        <div className="pl-2">Div (ttm)</div>
                        <div className="font-semibold text-right pr-2">${ metricPackage.dividendPerShareTTM.toFixed(2) }</div>
                    </div>
            )}
            {
                metricPackage?._52WeekLow &&
                (
                    <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                        <div className="pl-2">52W Low</div>
                        <div className="font-semibold text-right pr-2">{ metricPackage._52WeekLow.toFixed(0) }</div>
                    </div>
                )
            } 

            {
                metricPackage?.dividendYieldIndicatedAnnual && (
                    <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                        <div className="pl-2">Div Yield</div>
                        <div className="font-semibold text-right pr-2">{metricPackage?.dividendYieldIndicatedAnnual.toFixed(2)}%</div>
                    </div> 
                )
            }
               
            {
                metricPackage?._52WeekHigh &&
                (
                    <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                        <div className="pl-2">52W High</div>
                        <div className="font-semibold text-right pr-2">{ metricPackage._52WeekHigh.toFixed(0) }</div>
                    </div>
                )
            } 


            {/* <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                <div className="pl-2">Ex-Dividend Date</div>
                <div className="pl-2">xxx</div>
            </div>                 */}
            { metricPackage.beta && (<div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                <div className="pl-2">Beta</div>
                <div className="font-semibold text-right pr-2">{ metricPackage.beta.toFixed(2) }</div>
            </div>)}
            {/* <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                <div className="pl-2">Payout Ratio</div>
                <div className="pl-2">xxx</div>
            </div>                 */}
            {/* <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                <div className="pl-2">Holdings</div>
                <div className="pl-2">xxx</div>
            </div> */}

            {/* <div className='grid grid-cols-2 gap-1 items-center text-sm border-b border-default'>
                <div className="pl-2">1-Year Return</div>
                <div className="pl-2">xxx</div>
            </div> */}
            {/* 1-YearReturn = ((currentPrice - priceOneYearAgo) / priceOneYearAgo ) × 100 */}


            { metricPackage.ipo && (<div className='grid grid-cols-4 gap-1 items-center text-sm border-b border-default'>
                <div className="pl-2 col-span-1">IPO</div>
                <div className="font-semibold text-right pr-2 col-span-3">{ metricPackage.ipo }</div>
            </div>)}

        </div>
    )
}

export default MetricsTable;