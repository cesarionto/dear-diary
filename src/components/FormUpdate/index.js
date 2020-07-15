import React, {useState} from 'react'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'
import './styles.css'

function FormUpdate(props) {
    const [subject, setSubject] = useState(props.subject)
    const [content, setContent] = useState(props.content)
    const [id, setId] = useState(props.id)
    const [publicationDate, setPublicationDate] = useState(props.publicationDate)
    const history = useHistory()
    async function updateSecret(Event) {
        Event.preventDefault();
        if (window.confirm("Deseja atualizar?")) {
          try {
            const res = await api.put("/update-secret", { id, subject, content });
            console.log(res.data);
            history.push("/home");
          } catch (error) {
            console.log(error);
          }
        }
      }
      async function deleteSecret(Event) {
        Event.preventDefault();
    
        if (window.confirm("Apagar o seu segredo?")) {
          try {
            const res = await api.delete("/delete-secret", {
              data: {
                id,
              },
            });
            console.log(res);
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
export default FormUpdate;