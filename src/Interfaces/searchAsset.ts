export interface SearchResultItem {
    description: string;
    displaySymbol: string;
    symbol: string;
    type: string; 
  }
  
  export interface SearchResponse {
    count: number;
    result: SearchResultItem[];
  }