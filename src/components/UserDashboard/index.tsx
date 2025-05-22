import { useUserInfoService } from "@/hooks/useUserInfoService";
import {Tabs} from "../ui/Tabs";
import ChangePasswordForm from "../ui/forms/ChangePasswordForm";
import UserSettingsForm from "../ui/forms/UserSettingsForm";


const UserDashboard = () =>{
    const { data, token, loading, error } = useUserInfoService();

    const tabContent:React.ReactNode = UserSettingsForm();
    const changePassword:React.ReactNode = ChangePasswordForm();

    return (
        <>
        
        <div>This is dashboard!</div>
        <div>Data: {JSON.stringify(data)}</div>
            <Tabs
                items={[
                    { label: 'Settings', content: tabContent },
                    { label: 'Password', content: changePassword },
                   
                ]}
            />        
        </>
    );
}

export default UserDashboard;