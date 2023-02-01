import config from "../config.json";

function About(){

    return(
        <div className="about-container" id="aboutS">

        <div className="about-content-container">
            
            <div className="leader-image-container">
                <img src={config.founderPic}></img>
            </div>

            <div className="about-text-container">
                <h3>Los Oakleaf Bearers</h3>
                <p>
                Los <b>Oakleaf Bearers</b> es un gremio de MMO <b>Black Desert Online</b> fundado por el jugador <b>"Vulpes"</b>.                                        
                
                </p>
            
            <div>
                <h2>Nuestras Actividades</h2>
                
                <li>
                <b>Lore y Misiones</b> - Black Desert Es un juego extenso, pero Lore puede ser vago para algunos jugadores.
                , por lo que nos gustaría construir una comunidad que conozca las misiones y la lore del juego.
                Entonces, poder guiar a nuevos aventureros, y tal vez en el futuro puedan unirse a nosotros y hacer
                lo mismo para los recién llegados.
                </li>
                <li>
                <b>Contenido PvE</b> - Como la molienda, la agricultura, etc. En ningún momento nos centramos en PvP.
                Pero si te gusta el contenido PvP, siéntete libre de hacerlo, sin embargo, no obligues a otros jugadores a hacer lo mismo.            
                </li>
                <li>
                <b>LikeSkills</b> - Tales como entrenamiento, cosecha, pesca, etc.
                </li>
                <li>
                <b>RolePlay</b> - Sabemos que a muchos jugadores les gusta RolePlay, especialmente porque se trata de MMORPG. 
                Así que siéntete libre de presentar a tu personaje y el background de tu viaje.
                Después de todo, se trata de divertirse al final del día.    
                </li>
                
            </div>
            <h2>Nuestro Objetivo</h2>
                <p>
                Además de construir una comunidad saludable y respetuosa, también aspiramos a ser un gran gremio inclusivo
                en los servidores sudamericanos. Pero el punto más importante es ser una comunidad de la que las personas realmente se sientan 
                cómodas siendo parte. Así que sé amable con tus hermanos y hermanas, <b>dentro y fuera del juego</b>.                
                </p>
            </div>
        </div> 


        </div>
    );

}

export default About;