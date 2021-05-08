import { useShowScreenset} from ".";
import {AuthorizedView, NotAuthorizedView} from "./useAuth";
import {useContext, useState} from "react";

const ScreenContainerContext = React.createContext();

export function Screen({screenSet, startScreen, props}) {
    const {container} = useContext(ScreenContainerContext); 
    const show = useShowScreenset(screenSet, startScreen, container, props)
    show();
    return <></>
}


export const Profile = () => {
    return <Screen screenSet="Default-ProfileUpdate" startScreen='gigya-update-profile-screen'  />;
}

export const RegistrationLogin = () => {
     return <Screen screenSet="Default-RegistrationLogin" startScreen='gigya-register-screen' />;
}

export const ScreenContainer = ({children, containerId}) => {
    const [container, setContainer] = useState(containerId || "default-gigya-screen-container")
    return <ScreenContainerContext.Provider value={{container, setContainer}}>
        <div>
            {children}
            <div id={container}/>
        </div>
    </ScreenContainerContext.Provider>


}

export function  StandaloneScreen({screenSet, startScreen} ) {
    const container = `gigya-screen-${screenSet}-${startScreen}`;
    return  <div>
        <div id={container} />
        <Screen screenSet={screenSet} startScreen={startScreen} container={container} />

    </div>
}
 

  
 