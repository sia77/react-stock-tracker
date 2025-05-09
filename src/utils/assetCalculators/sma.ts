//Simple Moving Average
// src/utils/stocks/sma.ts
export function calculateSMA(prices: number[], period: number): number[] {
    if (period <= 0) throw new Error("Period must be greater than 0");
    if (prices.length < period) return [];
  
    const result: number[] = [];
  
    for (let i = 0; i <= prices.length - period; i++) {
      const window = prices.slice(i, i + period);
      const avg = window.reduce((sum, price) => sum + price, 0) / period;
      result.push(avg);
    }
  
    return result;
  }