//

function Navbar() {
    return (
        <div className="navbar-container">

            <div className="nav-logo-container">            
            
            <img src=""></img>               
            <h2>Tittle Tittle</h2>               
            
            </div>

            <div className="nav-sections-container">
                <a href=" ">Home</a>
                <a href=" ">About</a>
                <a href=" ">Gallery</a>
                <a href=" ">Application</a>             
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