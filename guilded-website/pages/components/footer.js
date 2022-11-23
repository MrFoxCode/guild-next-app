import React from "react";
import config from "../config.json";

function Footer(){

    return (
    <div className="footer-container">


        <div className="top-footer-container">
            <h1></h1>
        </div>

        <div className="footer-content-container">         
            
            
            <div className="footer-content">

            <div className="footer-content-image">
            <img src =""></img>
            </div>
            
                <p>
                Ipsum in ex consectetur nisi labore excepteur nisi cupidatat sit irure.Ipsum in ex consectetur nisi labore excepteur nisi cupidatat sit irure.
                Ipsum in ex consectetur nisi labore excepteur nisi cupidatat sit irure.Ipsum in ex consectetur nisi labore excepteur nisi cupidatat sit irure.
                Ipsum in ex consectetur nisi labore excepteur nisi cupidatat sit irure.Ipsum in ex consectetur nisi labore excepteur nisi cupidatat sit irure.
                </p>
            
            </div>

            <div className="footer-content-socials">

                <h2>Socials</h2>
 
                <div className="discord-container">
                <img src={config.discordLogo}></img>
                <p>Discord</p> 
                </div>

                <div className="twitter-container">
                <img src={config.twitterLogo}></img>
                <p>Twitter</p>
                </div>

                <div className="instagram-container">
                <img src={config.instagramLogo}></img>
                <p>Instagram</p>
                </div>

                <div className="stacks-container">

                    <h2>Stacks</h2>

                    <div className="stacks-container-images">
                    <img src={config.javaScriptLogo}></img>
                    <img src={config.nextJSLogo}></img>
                    <img src={config.reactJSLogo}></img>
                    <img src={config.sassLogo}></img>
                    </div>
                </div>
 
            </div>
            
        </div>

        <div className="all-rights-container">
            <h4>2022 - Tittle Tittle. All Rights Reserved.</h4>
        </div>



    </div>
    );
}

export default Footer;