import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import {Screenset, ScreensetContainer} from "../gigya/useScreenset";
import {AuthorizationProvider, AuthorizedView, NotAuthorizedView, useAuth} from "../gigya/useAuth";
import {useGigya} from "../gigya/context";
 
const Profile = ({container}) => {
    return <ScreensetContainer screenSet="Default-ProfileUpdate" startScreen='gigya-update-profile-screen' container={container}/>
}

const SighUp = ({container}) => {
    return <ScreensetContainer screenSet="Default-RegistrationLogin" startScreen='gigya-register-screen' container={container}/>

}        


 

function Main() {
    const {logout} = useGigya();
    let container ='gigya-main-screen';
    return (
        <div id="main">

            <nav>
                <AuthorizedView>
                    <a href="#" onClick={logout}> Logout </a>
                </AuthorizedView>
            </nav>

       
            <AuthorizedView>
 
                <Profile container={container}/>
            </AuthorizedView>

            <NotAuthorizedView>
                 <SighUp container={container}/>
            </NotAuthorizedView>

            <div id={container} />


        </div>
    )
}


export default Main