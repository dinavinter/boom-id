import { useGigya} from "./context";
   
export function useAuth( ) {
    const {isLoggedIn, setIsLoggedIn, logout}= useGigya();

    return {isLoggedIn, setIsLoggedIn, logout}; 
}
 
export function AuthorizedView({children} ) {
    const {isLoggedIn}= useAuth();

    return <div> {isLoggedIn? <div>{children}</div>:<></>}</div>;
}


export function NotAuthorizedView({children} ) {
    const {isLoggedIn}= useAuth();

    return  <div> {!isLoggedIn? <div>{children}</div>:<></>}</div>;
}