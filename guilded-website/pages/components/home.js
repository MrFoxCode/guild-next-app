import React from "react";
import { Link } from "react-scroll";


function Home(){

    return(
        <div className="home-container" id="homeS">

            
        <div className="mainpage-text-container">
            <h1>Welcome!</h1>
            <h3>to the Oakleaf Bearers Official Page</h3>
            <Link to ="applicationS" smooth={true} duration={500}><button>Your Journey Begins Here</button></Link> 
        </div>


        </div>
    );
}

export default Home;