import {useEffect, useState} from "react";
import {GigyaContext} from "./context"

export function GigyaProvider({domain, apiKey, children}) {
    const [isLoggedIn, setIsLoggedIn] = useState( false);
    const [gigya, setGigya] = useState(  );
    const [account, setAccount] = useState( false);
    const onGigyaServiceReady=()=>{
        window.gigya.accounts.getAccountInfo({
            callback:function(res) {
                if (res.errorCode === 0) {
                    setAccount(res);
                    setIsLoggedIn(true);

                }
                setGigya(window.gigya);

            }
        });

        window.gigya.socialize.addEventHandlers({
            onLogin: onLogin,
            onLogout:onLogout
        });


    }

    const onLogin=()=> {
        setIsLoggedIn(true);
    }
    const onLogout=()=> {
        setIsLoggedIn(false)
    }

    useEffect(()=> {
        window.onGigyaServiceReady = onGigyaServiceReady;
    } );

    return  <GigyaContext.Provider value={{...gigya, isLoggedIn:isLoggedIn, setIsLoggedIn:setIsLoggedIn, account}}>
        <script type="text/javascript"
                src={`https://cdns.${domain}/js/gigya.js?apikey=${apiKey}`}></script>

        {children}
    </GigyaContext.Provider>


}
 