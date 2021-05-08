import { useGigya} from "./context";


import { createContext, useContext } from 'react';
 
export function useAuth( ) {
    const {isLoggedIn}= useGigya();

    return {isLoggedIn:isLoggedIn}; 
}


export function AuthorizationProvider({children} ) {
    const {isLoggedIn}= useGigya();

     const authorizationView =  children({Authorized:({children} )=><div>{children}</div>, NotAuthorized:({children} )=><div>{children}</div>})

    return  <div> isLoggedIn? {authorizationView.Authorized} : {authorizationView.NotAuthorized}</div>
}


export function AuthorizedView({children} ) {
    const {isLoggedIn}= useGigya();

    return <div> {isLoggedIn? <div>{children}</div>:<></>}</div>;
}


export function NotAuthorizedView({children} ) {
    const {isLoggedIn}= useGigya();

    return  <div> {!isLoggedIn? <div>{children}</div>:<></>}</div>;
}