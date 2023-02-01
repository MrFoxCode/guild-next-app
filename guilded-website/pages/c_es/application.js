import React from "react";
import config from "../config.json";


function Application() {


    return (
        <div className="application-container" id="applicationS">
            <h1>Inscripción</h1>
            
            <div className="application-content">

                <div className="application-left-content">
                    
                    <div className="application-text-container">
                        <img src={config.footerLogo}></img>
                        <h2>Convertirse en un Oakleaf</h2>
                        <p>
                        Para unirte al gremio, deberás ser entrevistado en el juego o a través de Discord 
                        por uno de nuestros <b>Oakleaf Masters</b>.
                        </p>
                        <p>
                        También puedes intentar encontrarnos en la pestaña del gremio buscando <b>"Oakleaf_Bearers"</b>. O envíe un 
                        mensaje privado a uno de nuestros <b>Oakleaf Masters</b>:
                        </p>
                        <p className="masterNames">
                           "Vulpes"
                        </p>
                        <p>
                        Si ya eres parte de un gremio, <b>únete a nosotros como aliado</b> o habla con tu líder del gremio 
                        si no eres el maestro del gremio.
                        </p>
                    </div>

                <div className="apply-buttons-container">
                <button> Suscribirse</button>
                <a href ={config.discordInvite} target= "_blank"><button className="discord-button">Suscríbete a Discord</button></a>
                </div>
                
                </div>

                <div className="application-right-content">                    
                    <img src=""></img>
                    <div className="application-text-container2">
                        <img src={config.footerLogo}></img>
                        <h2>Requisitos</h2>                                              
                        <p>
                        Si bien no tenemos ningún requisito relacionado con la progresión del juego, sí tenemos algunos requisitos 
                        relacionados con la conducta antes de convertirse en un <b>Oakleaf Bearers</b>.
                        </p>

                        <p>
                        Así que no dude en contactarnos y con gusto le presentaremos a 
                        nuestros miembros e ideales.
                        </p>                        
                        {/* <div className="requirements-container">
                        <li><b>Respect</b> - The base of all community is Respect, so this must be the
                        asdasdasda
                        </li>
                        <li><b>Transparence</b> - asdasdasdas</li>
                        <li><b>Kindness</b> - asdasdasdas</li>
                        <li><b>Empathy</b> - asdasdasdas</li>
                        <li><b>First</b> - asdasdasdas</li>                        
                        </div> */}
                        <p>
                        No es necesario que complete todos los requisitos de inmediato, pero nos gustaría que los complete en el futuro. 
                        Este es el <b>"Camino del Roble Plateado"</b>.
                        </p>
                    </div>
                </div>

            </div>








        </div>
    );

}



export default Application;