import React from "react";
import { Link } from "react-scroll";


function Home(){

    return(
        <div className="home-container" id="homeS">

            
        <div className="mainpage-text-container">
            <h1>¡Bienvenido!</h1>
            <h3>Al sitio web oficial de los Oakleaf Bearers</h3>
            <Link to ="applicationS" smooth={true} duration={500}><button>Tu viaje comienza aquí</button></Link> 
        </div>


        </div>
    );
}

export default Home;