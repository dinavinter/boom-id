import {useAuth} from ".";

export function AuthorizedView({children} ) {
    const {isLoggedIn}= useAuth();

    return <div> {isLoggedIn? <div>{children}</div>:<></>}</div>;
}


export function NotAuthorizedView({children} ) {
    const {isLoggedIn}= useAuth();

    return  <div> {!isLoggedIn? <div>{children}</div>:<></>}</div>;
}