export interface TopNewsItem{
    category: string;
    datetime: number;
    headline:string;
    id:number;
    image: string;
    related:string;
    source:string;
    summary:string;
    url:string;
    animated:boolean;
    batch:number;
  }

  export interface NewsArticle {
  category: string;         // e.g., "company"
  datetime: number;         // Unix timestamp (e.g., 1751927948)
  headline: string;         // News headline
  id: number;               // Unique article ID
  image: string;            // Image URL (can be empty)
  related: string;          // Related symbol (e.g., "AAPL")
  source: string;           // News source (e.g., "Yahoo", "Finnhub")
  summary: string;          // Summary of the article
  url: string;              // Link to the full article
}

// Response type:
export type CompanyNewsResponse = NewsArticle[];