import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
 import {useGigya, AuthorizedView, NotAuthorizedView, Screen} from "../gigya";
 
const Profile = ({container}) => {
    return <Screen screenSet="Default-ProfileUpdate" startScreen='gigya-update-profile-screen' container={container}/>
}

const SighUp = ({container}) => {
    return <Screen screenSet="Default-RegistrationLogin" startScreen='gigya-register-screen' container={container}/>

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