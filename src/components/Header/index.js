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
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/home">Querido Diário</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/insert-secret">Inserir Segredo <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a onClick={finishSession} className="nav-link" href="/">Sair</a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
  );
}

export default Header;