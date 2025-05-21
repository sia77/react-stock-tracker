import axiosInstance from "@/api/axiosInstance";


const userInfoService = async (token:string):Promise<any> => {

    //console.log("token111: ", token);

    try{
        const result  = axiosInstance.get<any>('secure-api',{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })

        return result;

    }catch(err:any){
        console.error("Failed to fetch top news:", err.message || err);
        throw new Error("Could not fetch userInfo");
    }

    

}

export default userInfoService;