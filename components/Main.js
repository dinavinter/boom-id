 import React from 'react';
 import { 
    AuthorizedView,
    NotAuthorizedView, 
    ScreenContainer,
    Profile,
    RegistrationLogin,
    useAuth
} from "../gigya";


function Main() {
    const {logout} = useAuth();

    return (
        <div id="main">

            <nav>
                <AuthorizedView>
                    <a href="#" onClick={logout}> Logout </a>
                </AuthorizedView>
            </nav>
            
            <ScreenContainer>
                
                <AuthorizedView>
                    <Profile/>
                </AuthorizedView>
 
                <NotAuthorizedView>
                    <RegistrationLogin/>
                </NotAuthorizedView> 

            </ScreenContainer>


        </div>
    )
}


export default Main