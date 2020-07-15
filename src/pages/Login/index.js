import React,{useState} from 'react';
import api from '../../services/api';
import {login} from '../../services/auth';
import {useHistory} from 'react-router-dom';
// import { Container } from './styles';

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

  <form onSubmit={submit}>
        <p>
          Usuario: 
          <input type="text" value={username} onChange={ Event => setUsername(Event.target.value)}/>
        </p>
        <p>
            Senha: 
            <input type="password" value ={password} onChange={ Event => setPassword(Event.target.value)}/>
        </p>
      <button>Logar</button>
      {/* <button>Registrar</button> */}
  </form>

  );
}

export default Login;