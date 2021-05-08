import Head from "next/head"
import stylesheet from 'static/css/main.css'

import Footer from "../components/Footer"
import Main from "../components/Main";
import {GigyaProvider} from "../gigya";


function IndexPage() {
  
    return (
        <div>
            <Head>
                <title>BoomBuy Identity</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>

                
            </Head>

            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <GigyaProvider apiKey={"3_AO0Wfh-Q3xoWbnNsdzLG-aJP2Z3xY9OZNd-l1lfokBcQI9UBV3vCiTkB9Crh9W_v"} domain={"gigya.com"}>
                    
                <header id="header">
                    <h1>BoomBuy The Identity</h1>
                    <p>A simple site with Gigya Identity<br/></p>
                </header>

                <Main  /> 
 
                <Footer/>

                <script src="static/js/main.js"></script>

            </GigyaProvider>
        </div>
    );
}

export default IndexPage
