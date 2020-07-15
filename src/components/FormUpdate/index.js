import React, {useState} from 'react'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'

function FormUpdate(props) {
    const [subject, setSubject] = useState(props.subject)
    const [content, setContent] = useState(props.content)
    const [id, setId] = useState(props.id)
    const [publicationDate, setPublicationDate] = useState(props.publicationDate)
    const history = useHistory()
    async function updateSecret(Event){
        Event.preventDefault()
        if(window.confirm("Deseja atualizar?")){
            try{
                const response = await api.put("/update-secret", id)
                alert("Atualizado")
                history.push("/home")
             }catch(error){ 
                 alert(error)
             }
        }
    }
    async function deleteSecret(Event){
        Event.preventDefault()
        if(window.confirm("Apagar o seu segredo?")){
            try{
                const response = await api.delete("/delete-secret", id)
                alert("Apagado");
                history.push("/home")
            }catch(error){
                alert(error)
            }
        }
    }
  return (
    <div>
        <form onSubmit={updateSecret}>
            <p>Título:<input type="text" value={subject} onChange={Event => setSubject(Event.target.value)}/></p>
            <p>Resumo do Dia:<textarea value={content} onChange={Event => setContent(Event.target.value)}/></p>
        <button type="submit">Atualizar</button>
        <button onClick= {deleteSecret}>Apagar</button>
        </form>
    </div>
  );
}

export default FormUpdate;