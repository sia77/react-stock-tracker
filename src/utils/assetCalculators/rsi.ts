//Relative Strength Index
// Definition:
// A momentum indicator that measures the magnitude of recent price changes to assess whether an asset is overbought or oversold, according to AvaTrade. 
// Purpose:
// Helps traders identify potential overbought or oversold conditions and potential reversals in market trends. 
// How it works:
// The RSI oscillates between 0 and 100, with readings above 70 typically indicating overbought conditions and readings below 30 indicating oversold conditions. 
// Importance:
// The RSI is a widely used tool in technical analysis, providing insights into the strength and speed of price movements, according to Investopedia. 
export function calculateRSI(prices: number[], period: number = 14): number[] {
    if (prices.length < period) return [];
  
    const gains = [];
    const losses = [];
  
    for (let i = 1; i <= period; i++) {
      const diff = prices[i] - prices[i - 1];
      diff >= 0 ? gains.push(diff) : losses.push(Math.abs(diff));
    }
  
    let avgGain = gains.reduce((a, b) => a + b, 0) / period;
    let avgLoss = losses.reduce((a, b) => a + b, 0) / period;
  
    const rsi: number[] = [];
  
    for (let i = period; i < prices.length; i++) {
      const change = prices[i] - prices[i - 1];
      const gain = change > 0 ? change : 0;
      const loss = change < 0 ? Math.abs(change) : 0;
  
      avgGain = (avgGain * (period - 1) + gain) / period;
      avgLoss = (avgLoss * (period - 1) + loss) / period;
  
      const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
      rsi.push(100 - 100 / (1 + rs));
    }
  
    return rsi;
  }