import React, {useState} from 'react'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'
import './styles.css'

function FormSave(props) {
    const [subject, setSubject] = useState(props.subject)
    const [content, setContent] = useState(props.content)
    const history = useHistory()

    async function saveSecret(Event){
        Event.preventDefault()
        var data = {
            subject,
            content
        }
        try{
            const response = await api.post("/insert-secret", data)
            console.log(response)
            history.push("/home")
        }catch(error){ 
            alert(error)
        }
    }

  return (
    <div>
        <main className="form-save">
            <form onSubmit={saveSecret}>
                <div className="form-group">
                    <label>Título:</label>
                    <input className ="form-control" type="text" value={subject} 
                    onChange={Event => setSubject(Event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Resumo do Dia:</label>
                    <textarea className ="form-control" value={content} 
                    onChange={Event => setContent(Event.target.value)}/>
                </div>
                <button className="btn btn-primary button-save">Salvar</button>
            </form>
        </main>
    </div>
  );
}
export default FormSave;