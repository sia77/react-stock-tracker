import { useUserInfoService } from "@/hooks/useUserInfoService";
import Tabbed from "../ui/Tabbed";


const UserDashboard = () =>{
    //const { data, token, loading, error } = useUserInfoService();

    return (
        <>
        
        {/* <div>This is dashboard!</div>
        <div>Data: {JSON.stringify(data)}</div> */}
        <Tabbed />
        
        </>
    );
}

export default UserDashboard;