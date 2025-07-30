import {Tabs} from "../ui/Tabs";
//import ChangePasswordForm from "../ui/forms/ChangePasswordForm";
import UserSettingsForm from "../ui/forms/UserSettingsForm";


const UserDashboard = () =>{
    

    const tabContent:React.ReactNode = UserSettingsForm();
    //const changePassword:React.ReactNode = ChangePasswordForm();
    return (
        <>
            <Tabs
                items={[
                    { label: 'Settings', content: tabContent },
                    //{ label: 'Password', content: changePassword },
                   
                ]}
            />        
        </>
    );
}

export default UserDashboard;