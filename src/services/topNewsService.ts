import axiosInstance from "@/api/axiosInstance";
import { TopNewsItem } from "@/Interfaces/news";


export const topNewsService = async ():Promise<TopNewsItem[]> => {
    const response = await axiosInstance.get<TopNewsItem[]>('topNews');
    return response.data;
}