import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import logo from './img/logo.png'
import computador from './img/computador.png'


import { Button } from 'reactstrap';

import './components/Primeiro'
ReactDOM.render(
    <main>
        
        <form className="retangulo">
            <section className="login">
                <div className="logo">
                    <img src={logo} alt="logo da empresa" width="200px"/>
                </div>

                <div className="fundo">
                    
                </div>

                <div className="computador">
                    <img src={computador} alt="computador" width="380" width="383"></img>
                </div>

                <h6 className="welcome">Bem vindo ao <span class="corLaranja">painel</span></h6>
                <div className="email-container">
                    <input type="email" id="email-container"placeholder="Digite seu e-mail"/>
                 </div>

                <div className="password-container">
                    <input type="password" id="password-container" placeholder="Digite sua senha"/>            
               
               </div>
            </section>

            <Button id="btn-botao"color="primary">Acessar</Button>{' '}
        </form>
    </main>,
    document.getElementById('root')
)