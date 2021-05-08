import { useGigya} from "./context";
import {useContext} from "react";

export function useShowScreenset(screenSet, startScreen, containerID ) {
    const gigya= useGigya();
    if(gigya && gigya.accounts ) {
        gigya.accounts.showScreenSet({screenSet, startScreen, containerID});
        return true;
    }

    return false; 
}
 

export function  Screen({ screenSet, startScreen, container} ) {
 
    const isLoaded = useShowScreenset(screenSet, startScreen,container )
    return  <></>


}

export function  Screenset({screenSet, startScreen} ) { 
    const container = `gigya-screen-${screenSet}-${startScreen}`; 
    return  <div>
        <div id={container} />      
        <Screen screenSet={screenSet} startScreen={startScreen} container={container} /> 
    
    </div> 
}