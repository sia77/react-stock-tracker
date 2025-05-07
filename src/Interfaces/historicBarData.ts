export interface HistoricBarRequest {
  timeFrame :string;
  start: string;
  end: string;
  limit:number;
  ticker:string;
}

export interface BarData {
  c: number;        // Close price
  h: number;        // High price
  l: number;        // Low price
  n: number;        // Number of trades
  o: number;        // Open price
  t: string;        // Timestamp (ISO string)
  v: number;        // Volume
  vw: number;       // Volume weighted average price
}

export interface BarResponse {
  bar: BarData;
  symbol:string;
}

export interface HistoricalBarsResponse {
  bars: BarData[];
  symbol:string;
  next_page_token:string;
}