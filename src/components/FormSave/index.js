import React, {useState} from 'react';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

function FormSave(props) {
    const [subject, setSubject] = useState(props.subject);
    const [content, setContent] = useState(props.content);
    const history = useHistory();
    async function saveSecret(Event){
        Event.preventDefault();
        var data = {
            subject,
            content
        }
        try{
           const response = api.post("/insert-secret", data);
           console.log(response)
           history.push("/home")
        }catch(error){ 
            console.log(error)
        }
    }
  return (
    <form onSubmit={saveSecret}>
        
        <p>Título:<input type="text" value={subject} onChange={Event => setSubject(Event.target.value)}/></p>
        <p>Resumo do Dia:<textarea value={content} onChange={Event => setContent(Event.target.value)}/></p>
        <button >Salvar</button>
    </form>
  );
}

export default FormSave;