import React from "react";
import config from "../config.json";


function Application() {


    return (
        <div className="application-container" id="applicationS">
            <h1>Application</h1>
            
            <div className="application-content">

                <div className="application-left-content">
                    
                    <div className="application-text-container">
                        <img src={config.footerLogo}></img>
                        <h2>Becoming an Oakleaf</h2>
                        <p>
                          In order to join the guild, you'll need to be interviewed in-game or on Discord by
                          one of our <b>Oakleaf Masters</b>.
                        </p>
                        <p>
                          You also can try to reach us in-game by searching for <b>"Oakleaf_Bearers"</b>, on the guild searching
                          tab or sending a private message to one of our <b>Oakleaf Masters</b>:
                        </p>
                        <p className="masterNames">
                           "Vulpes"
                        </p>
                        <p>
                          If You are already part of a guild, You also can <b>join us as an Ally</b> or talk to your leaders about
                          the Alliance, if you are not the Guild Master.
                        </p>
                    </div>

                <div className="apply-buttons-container">
                <button> Apply Now</button>
                <a href ={config.discordInvite} target= "_blank"><button className="discord-button">Apply on Discord</button></a>
                </div>
                
                </div>

                <div className="application-right-content">                    
                    <img src=""></img>
                    <div className="application-text-container2">
                        <img src={config.footerLogo}></img>
                        <h2>Requirements</h2>                                              
                        <p>
                          Although we don't have any requirements related to your progress in-game, We have some
                          requirements needed, related to conduct in order to join the <b>Oakleaf Bearers</b>.
                        </p>

                        <p>
                        So feel free to get in touch with us and We'll gladly introduce you to the other
                        members and our ways.
                        </p>                        
                        {/* <div className="requirements-container">
                        <li><b>Respect</b> - The base of all community is Respect, so this must be the
                        asdasdasda
                        </li>
                        <li><b>Transparence</b> - asdasdasdas</li>
                        <li><b>Kindness</b> - asdasdasdas</li>
                        <li><b>Empathy</b> - asdasdasdas</li>
                        <li><b>First</b> - asdasdasdas</li>                        
                        </div> */}
                        <p>
                          You don't have to fill all the requirements at first, although We wish you could
                          pursuit them futurely. That's the <b>"Way of the Silver Oakleaf"</b>.
                        </p>
                    </div>
                </div>

            </div>








        </div>
    );

}



export default Application;