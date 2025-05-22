import { Card, CardContent } from "@/components/ui/card";

export default function About(){
    return (
        <>
            <Card className="mb-4 p-4 border rounded-xl shadow-none">
                <CardContent className="">
                    <main>
                        <article>
                        <h2 className="font-bold text-2xl mb-[30px]">About StockTracker</h2>
                        <p className="mb-[30px]"><span className="font-bold">StockTracker</span> is a showcase application built to demonstrate my proficiency with React and modern front-end development practices.</p>

                        <p className="mb-[30px]">It integrates real stock market data from external APIs; however, please note that the data is not real-time and may be subject to delays. 
                            This site is intended for demonstration purposes only — it is not a financial tool and does not provide investment advice or guarantees regarding data accuracy or timeliness.</p>
                        <p className="mb-[30px]">The application highlights key React concepts such as component architecture, state management, and API integration and  communication, error states, and loading indicators for a smooth user experience.</p>
                        <p className="mb-[30px]">Use it at your own discretion. I hope StockTracker offers a clear example of my technical capabilities and dedication to building clean, responsive user interfaces.</p>
                        <p className="mb-[30px]">Thanks for visiting!</p>
                        </article>
                    </main>
                </CardContent>
            </Card>



        </>
    )
}

