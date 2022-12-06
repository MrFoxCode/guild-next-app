import config from "../config.json";
import { Link } from "react-scroll";

function Navbar() {   
    
    //FUNCTION TO BRING THE SIDEBAR
    const addActive = () =>{
    //GET THE ELEMENT ID HIDDEN ON THE RIGHT
    let navLinksElement = document.getElementById('nav-sections-container');
        //ADD ACTIVE CLASS TO MAKE IT SHOW UP
        navLinksElement.classList.add('burger-active');
    };
    const removeActive = () =>{
    //GET THE ELEMENT ID HIDDEN ON THE RIGHT
    let navLinksElement = document.getElementById('nav-sections-container');
        //REMOVE ACTIVE CLASS TO SLIDE IT OFF SCREEN
        navLinksElement.classList.remove('burger-active');

    };

    return (
        

        
        <div className="navbar-container">
            
            <div className="nav-logo-container">
            <a href = "/">
            <img src={config.footerLogo}></img>
            </a>
            <div>
            <a href="/">                
            <h2>Oakleaf Bearers</h2>
            {/* <h5>The way of the Silver Oakleaf</h5> */}            
            </a>
            </div>               
            
            </div>
            
            <div className="nav-sections-container" id="nav-sections-container">                
                
                <div onClick={removeActive} className="cross-x">
                    <div className="rec1"></div>
                    <div className="rec2"></div>
                </div>
                
                <ul>
                <li><Link onClick={removeActive} to = "homeS" smooth={true} duration={300} id = 'homeRef'>Home</Link></li>                
                <li><Link onClick={removeActive} to = "aboutS" smooth={true} duration={300} id = 'aboutRef'>About</Link></li>
                <li><Link onClick={removeActive} to = "galleryS" smooth={true} duration={300} id = 'galleryRef'>Gallery</Link></li>
                <li><Link onClick={removeActive} to = "applicationS" smooth={true} duration={300} id = 'applicationRef'>Application</Link></li>
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
                <div className="lang-EN">
                <img src={config.langFlagEN}></img>
                <h3>EN</h3>
                </div>                
            </div>
            
            <div onClick={addActive} className="burger-container" id="burger-container">
                <div className="block1"></div>
                <div className="block2"></div>
                <div className="block3"></div>
            </div>
        </div>
        

    );   

}

export default Navbar;