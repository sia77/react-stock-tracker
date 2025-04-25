

const Service = () =>{
    return (
        <>
            <main>
                <article>
                    <p  className="mb-[30px]">
                        <span className="font-bold">StockTracker</span> provides an interactive interface for exploring stock market data, designed to demonstrate front-end development skills using Angular.
                    </p>

                    <p  className="mb-[30px]">
                        <div className="font-bold">Ticker Search & Suggestions</div>
                        Users can search by company name or stock ticker symbol, with intelligent autocomplete suggestions to streamline the search experience.
                    </p>
                    <p  className="mb-[30px]">
                        <div className="font-bold">Ticker Details</div>
                        Clicking on a ticker brings up additional information such as market data and other relevant metrics — all fetched from external APIs.
                    </p>
                    <p  className="mb-[30px]">
                        <div className="font-bold">Disclaimer</div>
                        The stock data displayed is sourced from third-party APIs and is not real-time. While the information is based on real market data, it may be delayed or inaccurate. StockTracker is not intended for financial decision-making or investment analysis. Please use the data at your own discretion.
                    </p>
                </article>
            </main>
        </>
    )
}

export default Service;