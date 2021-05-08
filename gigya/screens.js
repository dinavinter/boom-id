import {Screenset} from "./useScreenset";
import {AuthorizedView, NotAuthorizedView} from "./useAuth";

export const Profile = () => {
    return  <Screenset screenSet="Default-ProfileUpdate" startScreen='gigya-update-profile-screen'/>;
}

const RegistrationLogin = () =>{
    return <Screenset screenSet="Default-RegistrationLogin"  startScreen='gigya-register-screen' />

}


  
 