import { HistoricBarRequest } from "@/Interfaces/historicBarData";
import { useMemo } from "react";

export const useHistoricBarRequest = (ticker: string): HistoricBarRequest => {
    const { start, end } = useMemo(() => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
  
      const _5years = new Date();
      _5years.setFullYear(_5years.getFullYear() - 5);
  
      return {
        start: _5years.toLocaleDateString('en-CA'),
        end: yesterday.toLocaleDateString('en-CA'),
      };
    }, []);
  
    return useMemo(() => ({
      ticker: ticker.toUpperCase(),
      limit: 1000,
      timeFrame: '1Month',
      start,
      end,
    }), [ticker, start, end]);
  }