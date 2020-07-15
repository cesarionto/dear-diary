import React,{useState} from 'react';
import './style.css';
//import FormUpdate from '../FormUpdate';
import FormSave from '../FormSave';

function Secret({id, subject, content, publicationDate}) {
    const [visibility, setVisibility] = useState(false)
    return (
        <div>
            <div className="secret">
                <div>
                    <h4>Titulo: {subject}</h4>
                    <p>{content}</p>
                    <p>Data de Publicação: {publicationDate}</p>    
                </div>
                <div>
                    <button onClick = {()=>setVisibility(!visibility)}>Editar Segredo</button>
                </div>
                <div className={visibility ? `modal.active` : `modal`}>
                    <FormSave id= {id} subject={subject} content={content}/>
                    <div className="modal-close">
                        <button onClick = {()=>setVisibility(!visibility)}>Cancelar</button>
                    </div>    
                </div>
            </div>
            <br/>
        </div>
        
    );
}


export default Secret;