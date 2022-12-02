import config from "../config.json";

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
                <li><a href="/">Home</a></li>                
                <li><a href="">About</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/">Application</a></li>
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