export interface AssetData {
    id:number;
    symbol: string;
    name: string;
    open: number;
    close: number;
    prevC:number;
    high: number;
    low: number;
    change: string;
    volume: number;
    intradayStrength: number;
    gap: number;
    dailyRange: number;
    intradayIntensity: number;
    marketCap: number;
    shareOutstanding:number;
    currency:string;
    ipo:string;
    exchange:string;
    weburl:string;
    logo:string;
  }

  export interface SearchResponse{
    result:AssetData[];
  }