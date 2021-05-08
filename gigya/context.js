import { createContext, useContext } from 'react';
export const AuthContext = createContext({isLoggedIn:false});

export const GigyaContext = createContext({isLoggedIn:false});

export function useGigya() {
    const gigya= useContext(GigyaContext);
    if(gigya && gigya.socialize)
    return {...gigya, logout:gigya.socialize.logout}
    return {isLoggedIn:false}

}

