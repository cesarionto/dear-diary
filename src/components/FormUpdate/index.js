import React, {useState} from 'react'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'
import './styles.css'

function FormUpdate(props) {
    const [subject, setSubject] = useState(props.subject)
    const [content, setContent] = useState(props.content)
    const [id, setId] = useState(props.id)
    const history = useHistory()
    async function updateSecret(Event) {
      Event.preventDefault()
        if (window.confirm("Deseja atualizar?")) {
          try {
            const response = await api.put("/update-secret", { id, subject, content });
            console.log(response.data);
            history.push("/home");
          } catch (error) {
            console.log(error);
          }
        } 
      }
      async function deleteSecret(Event) {
        Event.preventDefault()
        if (window.confirm("Apagar o seu segredo?")) {
          try {
            const response = await api.delete(`/delete-secret/${id}`)
            console.log(response);
            alert("Apagado!")
            history.push("/home");
          } catch (error) {
            console.log(error);
          }
        }
      }
  return (
    <div>
        <main className="form-save">
            <form onSubmit={updateSecret}>
                <div className="form-group">
                    <label>Titulo</label>
                    <input className ="form-control" type="text" value={subject} 
                    onChange={Event => setSubject(Event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>responseumo do Dia:</label>
                    <textarea className ="form-control" value={content} 
                    onChange={Event => setContent(Event.target.value)}/>
                </div>
                <button className="btn btn-outline-success button-save">Atualizar</button>
            </form>
          <button onClick={deleteSecret} className = "btn btn-outline-danger button-save">Apagar</button>
        </main>
    </div>
  );
}
export default FormUpdate;