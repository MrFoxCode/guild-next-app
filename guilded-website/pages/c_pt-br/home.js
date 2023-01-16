import React from "react";
import { Link } from "react-scroll";


function Home(){

    return(
        <div className="home-container" id="homeS">

            
        <div className="mainpage-text-container">
            <h1>Bem-Vindo!</h1>
            <h3>Ao site Oficial dos Oakleaf Bearers</h3>
            <Link to ="applicationS" smooth={true} duration={500}><button>Sua Jornada Começa Aqui</button></Link> 
        </div>


        </div>
    );
}

export default Home;