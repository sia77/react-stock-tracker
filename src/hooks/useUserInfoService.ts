import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import userInfoService from "@/services/userInfoService";

export const useUserInfoService = () =>{

    const [token, setToken] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState();
    const [data, setData] = useState<any>(null);

    const {getToken} = useAuth();

    useEffect(() => {       

        const fetchUserInfo = async () =>{
            
            try{
                const t = await getToken(
                    {
                    authorizationParams: {
                      audience: 'https://stocktracker-api',
                      scope: 'read:data'
                    },
                  }
                );
                
                setToken(t);
                const result = await userInfoService(t);
                setData(result);

            }catch(err:any){
                console.log(err);
                setError(err);
            }finally{
                setLoading(false);
            }
        }
        
        fetchUserInfo();

    }, []);


    return { data, token, loading, error }
}






