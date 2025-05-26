import axiosInstance from "@/api/axiosInstance"


export const getAssetMetricService = async (ticker:string):Promise<any> =>{

    try{
        const result = await axiosInstance.get<any>('metric', {
            params : {
                ticker
            }
        });

        //console.log(result.data)

        return result.data;



    }catch(err:any){
        throw err;
    }
}

