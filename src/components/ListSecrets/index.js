import React, {useEffect, useState} from 'react';

import api from '../../services/api';
import Secret from '../Secret'
import './styles.css';

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
    <div className="overflow-hidden container secrets">
        {secrets.map(secret => (
            <Secret key = {secret.id} id= {secret.id} subject = {secret.subject} 
            content = {secret.content} publicationDate = {secret.publicationDate}/>
        ))}
    </div>
  );
}

export default ListSecrets;