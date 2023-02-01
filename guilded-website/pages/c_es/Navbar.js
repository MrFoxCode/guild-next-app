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

    //FUNCTION TO DISPLAY MORE LANGS OPTIONS
    const langActive = () =>{
        let langElement = document.getElementById('list2');
        let langElement2 = document.getElementById('list3');

        //Check if lang tab is active, if not then Add the active class 
        if(langElement.classList.contains('lang-Active')){
            langElement.classList.remove('lang-Active');
            langElement2.classList.remove('lang-Active');
        }else{
            langElement.classList.add('lang-Active');
            langElement2.classList.add('lang-Active');
        }
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
                <li><Link onClick={removeActive} to = "homeS" smooth={true} duration={300} id = 'homeRef'>Início</Link></li>                
                <li><Link onClick={removeActive} to = "aboutS" smooth={true} duration={300} id = 'aboutRef'>Sobre</Link></li>
                <li><Link onClick={removeActive} to = "galleryS" smooth={true} duration={300} id = 'galleryRef'>Galeria</Link></li>
                <li><Link onClick={removeActive} to = "applicationS" smooth={true} duration={300} id = 'applicationRef'>Inscrição</Link></li>
                </ul>

            </div>


            {/* <div className="input-container">
                <input placeholder="Search"></input>
            </div> */}
            

            <div className="buttons-container">
                <Link to = "applicationS" smooth={true} duration={300} target= "_blank" href=" " ><button className="join"> Inscreva-se! </button></Link>
                {/* <button className="group" > group info </button> */}
            </div>

            <div className="lang-container">
                
                <ul className="lang-content">
                    <a onClick={langActive}>
                    <li className="list1" id="list1">
                    <div className="lang1">
                    <img src={config.langFlagES}></img>
                    <h3>ES</h3>
                    </div>
                    </li>
                    </a>
                    
                    <a href="/pt">
                    <li className="list2" id="list2">
                    <div className="lang2">
                    <img src={config.langFlagBR}></img>
                    <h3>PT</h3>
                    </div>                   
                    </li>
                    </a>

                    <a href="/"> 
                    <li className="list3" id="list3">
                    <div className="lang3">
                    <img src={config.langFlagEN}></img>
                    <h3>EN</h3>
                    </div>
                    </li>
                    </a>
                    
                </ul>
                
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