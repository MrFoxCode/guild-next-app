import React from "react";
import config from "../config.json";


function Application() {


    return (
        <div className="application-container" id="applicationS">
            <h1>Inscrição</h1>
            
            <div className="application-content">

                <div className="application-left-content">
                    
                    <div className="application-text-container">
                        <img src={config.footerLogo}></img>
                        <h2>Se tornando um Oakleaf</h2>
                        <p>
                          Para se juntar a guild, você irá precisar ser entrevistado em jogo ou através do discord
                          por um de nossos <b>Oakleaf Masters</b>.
                        </p>
                        <p>
                          Você também pode tentar nos encontrar na aba de guilda, procurando por <b>"Oakleaf_Bearers"</b>. Ou envie uma 
                          mensagem privada para um de nossos <b>Oakleaf Masters</b>:
                        </p>
                        <p className="masterNames">
                           "Vulpes"
                        </p>
                        <p>
                          Se você já faz parte de uma Guilda, <b>Junte-se a nós como aliado</b> ou fale com o lider de sua Guilda, 
                          caso você não for o Mestre de Guilda.
                        </p>
                    </div>

                <div className="apply-buttons-container">
                <button> Inscreva-se</button>
                <a href ={config.discordInvite} target= "_blank"><button className="discord-button">Inscreva-se pelo Discord</button></a>
                </div>
                
                </div>

                <div className="application-right-content">                    
                    <img src=""></img>
                    <div className="application-text-container2">
                        <img src={config.footerLogo}></img>
                        <h2>Requisitos</h2>                                              
                        <p>
                          Embora não tenhamos nenhum requisito relacionado a progressão no jogo, Nós temos alguns requisitos 
                          relaciados a conduta antes de se tornar um <b>Oakleaf Bearers</b>.
                        </p>

                        <p>
                        Então sinta-se livre para entrar em contato conosco, e iremos lhe apresentar 
                        nossos membros e nossos ideais  com prazer.
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
                          Você não precisa preencher todos os requisitos logo de início, Porém gostarimos que futuramente 
                          você preencha-os. Esse é o <b>"Caminho do Carvalho de Prata"</b>.
                        </p>
                    </div>
                </div>

            </div>








        </div>
    );

}



export default Application;