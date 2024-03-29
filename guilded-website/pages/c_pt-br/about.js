import config from "../config.json";

function About(){

    return(
        <div className="about-container" id="aboutS">

        <div className="about-content-container">
            
            <div className="leader-image-container">
                <img src={config.founderPic}></img>
            </div>

            <div className="about-text-container">
                <h3>Os Oakleaf Bearers</h3>
                <p>
                A <b>Oakleaf Bearers</b> é uma guilda do MMO <b>Black Desert Online</b> fundada pelo jogador <b>"Vulpes"</b>.                                        
                
                </p>
            
            <div>
                <h2>Nossas Atividades</h2>
                
                <li>
                <b>Lore e Missões</b> - Black Desert é um jogo vasto, mas a Lore pode ser vaga para alguns jogadores
                , então gostariamos de construir uma comunidade que conheça sobre missões e a lore do jogo.
                Assim sendo apto para guiar novos aventureiros, e talvez no futuro eles possam se juntar a nós e fazer
                o mesmo para recém chegados.
                </li>
                <li>
                <b>Conteúdo PvE</b> - Tais como Grindar, farmar, etc. Em nenhum momento focamos em PvP.
                Mas se você gosta de conteúdo PvP, sinta-se livre para assim o fazer, no entanto não obrigue ou force outro jogadores para o mesmo.            
                </li>
                <li>
                <b>LikeSkills</b> - Tais como Treinamento, Colheita, Pesca, etc.
                </li>
                <li>
                <b>RolePlay</b> - Sabemos que muitos jogadores gostam de roleplay, especialmente por que MMORPG é sobre isso afinal. 
                Então sinta-se livre para apresentar o seu personagem e o background de sua jornada.
                Afinal de contas, é sobre se divertir no final do dia.    
                </li>
                
            </div>
            <h2>Nosso Objetivo</h2>
                <p>
                Além de construir uma comunidade saudável e respeitosa, Nós também temos o objetivo de ser uma grande Guilda inclusiva
                nos servidores da América do Sul. Mas o ponto mais importante, é ser uma comunidade que as pessoas realmente se sintam
                confortáveis de fazer parte. Então seja gentil com seus irmãos e irmãs, <b>dentro e fora do jogo</b>.                
                </p>
            </div>
        </div> 


        </div>
    );

}

export default About;