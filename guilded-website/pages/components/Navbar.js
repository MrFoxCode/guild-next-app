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
                <li><Link to = "homeS" smooth={true} duration={300} id = 'homeRef'>Home</Link></li>                
                <li><Link to = "aboutS" smooth={true} duration={300} id = 'aboutRef'>About</Link></li>
                <li><Link to = "galleryS" smooth={true} duration={300} id = 'galleryRef'>Gallery</Link></li>
                <li><Link to = "applicationS" smooth={true} duration={300} id = 'applicationRef'>Application</Link></li>
                </ul>             
            </div>

            {/* <div className="input-container">
                <input placeholder="Search"></input>
            </div> */}
            

            <div className="buttons-container">
                <Link to = "applicationS" smooth={true} duration={300} target= "_blank" href=" " ><button className="join"> Join us now </button></Link>
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