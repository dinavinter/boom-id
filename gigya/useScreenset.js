import { useGigya} from "./context";
import {useContext} from "react";

export function useShowScreenset(screenSet, startScreen, containerID, props ) {
    const gigya= useGigya();
    return ()=> {
        if (gigya && gigya.accounts) {
            gigya.accounts.showScreenSet({screenSet, startScreen, containerID, ...props});
        }
    }
  
}
 



