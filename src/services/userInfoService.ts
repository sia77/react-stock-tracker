import axiosInstance from "@/api/axiosInstance";
import { ApiUser, FormData } from "@/Interfaces/db";


const toFormData = (user: ApiUser): FormData => ({
    email: user.email,
    firstName: user.first_name ?? '',
    lastName: user.last_name ?? '',
    phone: user.phone ?? '',
    address: user.address ?? '',
    state_province: user.state_province ?? '',
    postalCode: user.postal_code ?? '',
    unit: user.unit ?? '',
    city: user.city ?? '',
    createdAt:user.created_at ?? ''
  });


const userInfoService = async (token:string):Promise<any> => {    

    try{
        const {data:{user}}  = await axiosInstance.get<any>('secure-api',{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });

        return toFormData(user);

    }catch(err:any){
        console.error("Failed to fetch top news:", err.message || err);
        throw new Error("Could not fetch userInfo");
    }    

}

export default userInfoService;