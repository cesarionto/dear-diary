import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import Secret from '../Secret'

// import { Container } from './styles';

function ListSecrets() {
  const [secrets, setSecrets] = useState([]);

    useEffect(()=>{
        list();
    },[]);
    async function list(){
        const response = await api.get("/list-secrets");
        console.log(response);
        setSecrets(response.data);
    }

  return (
  <div> 
      <h1>Meu Querido Diario</h1>
      <hr/>
      {secrets.map(secret => (
          <Secret key = {secret.id} subject = {secret.subject} 
          content = {secret.content} publicationDate = {secret.publicationDate}/>
      ))}
      <hr/>
  </div>
  );
}

export default ListSecrets;