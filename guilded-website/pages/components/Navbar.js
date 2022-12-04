import config from "../config.json";
import { Link } from "react-scroll";


function Navbar() {
    return (

        
        <div className="navbar-container">

            <div className="nav-logo-container">
            

            <img src={config.footerLogo}></img>
            <div>            
            <h2>Oakleaf Bearers</h2>
            {/* <h5>The way of the Silver Oakleaf</h5> */}            
            </div>               
           
            </div>
            
            <div className="nav-sections-container">
                <ul>
                <li><a id = 'homeRef'>Home</a></li>                
                <li><a id = 'aboutRef'>About</a></li>
                <li><a id = 'galleryRef'>Gallery</a></li>
                <li><a id = 'applicationRef'>Application</a></li>
                </ul>             
            </div>

            {/* <div className="input-container">
                <input placeholder="Search"></input>
            </div> */}
            

            <div className="buttons-container">
                <a target= "_blank" href=" " ><button className="join"> Join us now </button></a>
                {/* <button className="group" > group info </button> */}
            </div>

            <div className="lang-container">
                <img src=""></img>
                <h3>EN</h3>                
            </div>






        </div>
    );


    



}

export default Navbar;