import React,{useState} from 'react';
import api from '../../services/api';
import {login} from '../../services/auth';
import {useHistory} from 'react-router-dom';
import './styles.css';
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function submit(Event){
    
        Event.preventDefault();
        const data = {
            username,
            password
        }
        try{
            const response = await api.post("/login", data);
            console.log(response.data);
            login(response.data.token);
            history.push("/home");
        }catch(error){
            console.log(error.message);
        }
    }
  return ( 
    <div>
        <main className="form-main"> 
            <h1>Querido Diário</h1>
            <br/>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>
                        <p className="model-text">Usuario:</p> 
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
                <button className="button-login btn btn-primary">Logar</button>
            </form>
            <div className="sign-up">
            <small className="form-text text-muted">
                Você precisa ser o meu melhor amigo:
                <a href="/sign-up"> Seja meu melhor amigo.</a>
            </small>
            </div>
        </main>
    </div>
  );
}

export default Login;