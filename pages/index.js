import Head from "next/head"
import stylesheet from 'static/css/main.css'

import Footer from "../components/Footer"
 import Main from "../components/Main";
import {GigyaContext, useGigya} from "../gigya/context";
 import {useEffect, useState} from "react";

 
 function GigyaContainer({children}) { 
     const gigya= useGigya();
     return <div>gigya? {children(gigya)} : <></></div>
     
 }
 
function IndexPage() {
    const [isLoggedIn, setIsLoggedIn] = useState( false); 
    const [gigya, setGigya] = useState(  );
    const [account, setAccount] = useState( false);

    const onGigyaServiceReady=()=>{
        window.gigya.accounts.getAccountInfo({
            callback:function(res) {
                if (res.errorCode === 0) {
                    setAccount(res);
                    setIsLoggedIn(true);
                    
                }
                setGigya(window.gigya);

            }
        });

        window.gigya.socialize.addEventHandlers({
            onLogin: onLogin,
            onLogout:onLogout
        });


        
    }
    
    const onLogin=()=> {
        setIsLoggedIn(true);
    }
    const onLogout=()=> {
        setIsLoggedIn(false)
    }
    
    useEffect(()=> {
        window.onGigyaServiceReady = onGigyaServiceReady;
    } );
    
 

    return (
        <div>
            <Head>
                <title>BoomBuy Identity</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
                <script type="text/javascript"
                        src="https://cdns.gigya.com/js/gigya.js?apikey=3_AO0Wfh-Q3xoWbnNsdzLG-aJP2Z3xY9OZNd-l1lfokBcQI9UBV3vCiTkB9Crh9W_v"></script>

                
            </Head>

            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <div> {account? <span>{account.profile.email}</span> :<></>}</div>
            <GigyaContext.Provider value={{...gigya, isLoggedIn:isLoggedIn, setIsLoggedIn:setIsLoggedIn, account}}>
                    
                <header id="header">
                    <h1>BoomBuy The Identity</h1>
                    <p>A simple site with Gigya Identity<br/></p>
                </header>

                <Main  /> 
 
                <Footer/>

                <script src="static/js/main.js"></script>

            </GigyaContext.Provider>
        </div>
    );
}

export default IndexPage
