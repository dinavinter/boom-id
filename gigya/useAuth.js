import { useGigya} from "./context";
   
export function useAuth( ) {
    const {isLoggedIn, setIsLoggedIn, logout}= useGigya();

    return {isLoggedIn, setIsLoggedIn, logout}; 
}
 
