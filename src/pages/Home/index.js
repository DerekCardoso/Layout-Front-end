import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/home.css'
import './styles/buttons.css'
import './styles/posts.css'

import logo from './img/logo.png'
import mulher from './img/mulher.png'

import { Button } from 'reactstrap';


const Page = () => {
   return ( 
    <div className="menu">
                <div className="logo">
                    <img src={logo} alt="logo da empresa" width="200px"/>

                    <div id="btn-menu">
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul>
                        <li> <Button id="btn-botao1" color="primary" >Início</Button>{' '} </li>
                        
                        <li> <Button id="btn-botao2" color="primary" >Contatos</Button>{' '} </li>
                        
                        <li> <Button id="btn-botao3" color="primary" >Relatório</Button>{' '} </li>
                        
                        <li> <Button id="btn-botao4" color="primary" >Contatos</Button>{' '} </li>
                        
                        <li> <Button id="btn-botao5" color="primary" >Contatos</Button>{' '} </li>
                        
                    </ul>
                    </div>
                 </div>
        
      <div className="boas-vindas">
        <h5>Olá Usuário</h5>
        <hr></hr>

      </div>
   
        <div id="quadroposts">
            <div className="post1">
                <img className="fundo1" alt="post exemplo" src={mulher}></img>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesettin...</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>

            <div className="post2">
                <img className="fundo2" alt="post exemplo" src={mulher}></img>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesettin...</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>

            <div className="post3">
                <img className="fundo3" alt="post exemplo" src={mulher}></img>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesettin...</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>

            <div className="post4">
                <img className="fundo4" alt="post exemplo" src={mulher}></img>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesettin...</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
            </div>
        </div>
    </div>
);
     
}
export default Page;