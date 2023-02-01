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
            <img src ={config.footerLogo}></img>
            </div>
            
                <p>
                Oakleaf Bearers es una comunidad de jugadores del MMORPG Black Desert Online, en el servidor sudamericano.
                Todas las creaciones visuales relacionadas son propiedad de sus respectivos creadores y no están asociadas a ningún tipo de monetización.
                o cualquier otro negocio relacionado con fines lucrativos.
                </p>
            
            </div>

            <div className="footer-content-socials">

                <h2>Socials</h2>
 
                {/* Link to socials and other Pages*/}
                <a href={config.discordInvite} target='_blank'>
                <div className="discord-container">
                <img src={config.discordLogo}></img>
                <p>Discord</p>
                </div>
                </a>
                
                <a href="https://twitter.com" target='_blank'>     
                <div className="twitter-container">
                <img src={config.twitterLogo}></img>
                <p>Twitter</p>
                </div>
                </a>

                <a href={config.instagramLink} target='_blank'>
                <div className="instagram-container">
                <img src={config.instagramLogo}></img>
                <p>Instagram</p>
                </div>
                </a>

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
            <h4>© 2022 Oakleaf Bearers. Todos los derechos reservados. Este Sitio no tiene afiliación con Kakao Games o Pearl Abyss.</h4>
        </div>



    </div>
    );
}

export default Footer;