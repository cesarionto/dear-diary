import React,{useState} from 'react';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import './styles.css';
// import { Container } from './styles';

function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const history = useHistory();

    async function submit(Event){

        Event.preventDefault();
        const data = {
            fullName,
            username,
            password
        }
        try{
            const response = await api.post("/sign-up", data);
            console.log(response.data);
            alert("Melhor amigo cadastrado!")
            history.push("/");
        }catch(error){
            console.log(error.message);
        }
    }
  return ( 
    <div>
        <main className="form-main">
            <h1>Seja o meu Melhor Amigo</h1>
            <br/>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>
                    <p className="model-text">Nome Completo: </p>
                    <input className="form-control" type="text" value={fullName} onChange={ Event => setFullName(Event.target.value)}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <p className="model-text">Usuario: </p>
                    <input className="form-control" type="text" value={username} onChange={ Event => setUsername(Event.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                    <p className="model-text">Senha: </p>
                        <input className="form-control" type="password" value ={password} onChange={ Event => setPassword(Event.target.value)}/>
                    </label>
                </div>
                <br/>
                <button className="button-login btn btn-primary">Registrar-se</button>
            </form>
            <div className="sign-up">
            </div>
        </main>
    </div>
  );
}

export default SignUp;