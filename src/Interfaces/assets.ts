export interface AssetData {
    id:number;
    symbol: string;
    name: string;
    open: number;
    close: number;
    high: number;
    low: number;
    change: string;
    volume: number;
    intradayStrength: number;
    gap: number;
    dailyRange: number;
    intradayIntensity: number;
    marketCap: number;
  }