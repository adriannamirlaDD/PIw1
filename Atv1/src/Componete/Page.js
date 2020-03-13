import React, { Component } from 'react';
import "./Page.css";
import logo from "../logo.svg";
class Page extends Component {
    state = {}
    render() {
        return (
            <div className = "conteiner">
                <div className = "menu">
                    <div className = "imagem">
                        <img className="logo" src = {logo}/>
                    </div>
                    <div className = "botoes">
                        <button className = "botao">
                            Perfil
                        </button>
                        <button className = "botao">
                            Linha do tempo
                        </button>

                    </div>
                    <div className = "nome">
                        <h1>Mirla Oliveira</h1>

                    </div>

                </div>
                <div className = "users">
                    <div className = "posts">
                        <div className = "user1">
                                <h3>@joelma</h3>
                                <p> Tarde demais, tentei te avisar mas você não ligou.
                                    Chora não coração, sofre não não coração.
                                    isso é pra você aprender, ele nunca amou você </p>
                            </div>
                        <div className = "user2">
                            <h3> @chiquinha </h3>
                            <p> "Se não fosse a ajuda espiritual que eu dou a esses meninos"<br></br>
                                Pode se dizer que a Chiquinha é uma personagem essencial na amizade de 
                                Chaves e Quico. Ela consola quando Quico chora na parede e quando Chaves entra no barril,
                                mas quem ajuda quando Chiquinha chora sem parar? </p>
                        </div>
                        <div className = "user3">
                            <h3>@chaves</h3>
                            <p>"Prefiro morrer do que perder a vida" <br></br>
                                De acordo com Chaves, o grande pensador do barril, há uma diferança absurda entrer
                                morrer e perder a vida. E parece que morrer é melhor.
                            </p>
                        </div>
                        </div>

                    </div>

                </div>



            
            );
    }
}

export default Page;