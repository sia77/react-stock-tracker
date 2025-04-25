export interface assetDelta{
    ticker: string; 
    delta: number;
  }

export interface assetPerformance {
    gainers:assetDelta[];
    losers:assetDelta[];
    mostActive:assetDelta[];
  }