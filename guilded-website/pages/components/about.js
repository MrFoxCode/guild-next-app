import config from "../config.json";

function About(){

    return(
        <div className="about-container" id="aboutSection">

        <div className="about-content-container">
            
            <div className="leader-image-container">
                <img src={config.founderPic}></img>
            </div>

            <div className="about-text-container">
                <h3>The Oakleaf Bearers</h3>
                <p>
                The <b>Oakleaf Bearers</b> is a Guild from <b>Black Desert Online</b> founded by the player <b>"Vulpes"</b>.                                        
                
                </p>
            
            <div>
                <h2>Our Main Activities</h2>
                <li>
                <b>Lore and Questing</b> - Black Desert is a vast game, but the Lore may be vague for some players
                , so We would like to build a community that get to know a lot about the quests and the game lore.
                So We would be able to guide any adventurer and maybe in the future They could join us and do
                the same for newcomers.
                </li>
                <li>
                <b>PvE Content</b> - Such as grinding, farming, etc. We do not focus on PvP at any moment.
                But if you enjoy PvP content, feel free to do so, but do not push or force other members
                towards it.            
                </li>
                <li>
                <b>LikeSkills</b> - Such as Training, Gathering, Fishing, etc.
                </li>
                <li>
                <b>RolePlay</b> - We know that a lot of players enjoy roleplaying, especially because that's
                what MMORPG is about after all. So feel free to present your characters and their background stories.
                It's all about having fun at the end of the day after all.    
                </li>
                
            </div>
            <h2>Our Main Goal</h2>
                <p>
                Besides building a healthy and respectful community, We also have as goal to be a great and
                inclusive guild from the South America servers. But the most important thing, is to be a community 
                that people really feels comfortable to be part of. So be kind and generous to your mates, brothers
                and sisters, <b>in game and outside</b>.                
                </p>
            </div>
        </div> 


        </div>
    );

}

export default About;