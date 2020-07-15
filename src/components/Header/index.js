import React from 'react'
import './styles.css'
// import { Container } from './styles';
import {logout} from '../../services/auth'


function Header() {
    function finishSession(){
        logout()
    }
  return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="/home">Querido Diário</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/insert-secret">Inserir Segredo <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a onClick={finishSession} class="nav-link" href="/">Sair</a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
  );
}

export default Header;