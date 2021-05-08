import {Screen} from "./useScreenset";
import {AuthorizedView, NotAuthorizedView} from "./useAuth";
 
const ScreenRouter =({containerId})=>{
    const container = containerId?? "screen-container";
    export const Profile = () => {
        return  <Screen screenSet="Default-ProfileUpdate" startScreen='gigya-update-profile-screen' container={container}/>;
    }

    export const RegistrationLogin = () =>{
        return <Screen screenSet="Default-RegistrationLogin"  startScreen='gigya-register-screen' container={container} />

    }
    
    return <div id={container} />


}


  
 