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
                A Oakleaf Bearers é uma communidade de jogadores do MMORPG Black Desert Online, no servidor da América do Sul. 
                Toda criação visual relacionada é proprierade de seus respectivos criadores, e não esta associada com nenhum tipo de monetização 
                ou nenhum outro negócio relacionado a meios lucrativos.
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
            <h4>© 2022 Oakleaf Bearers. Todos os Direitos Reservados. Esse Site não tem nenhuma afiliação com Kakao Games ou Pearl Abyss.</h4>
        </div>



    </div>
    );
}

export default Footer;