import React,{useState} from 'react';
import './style.css';
import FormUpdate from '../FormUpdate';

function Secret({id, subject, content, publicationDate}) {
    const [visibility, setVisibility] = useState(false)
    return (
        <div className="secret">
            <div>
                <h1>{subject}</h1>
                <h3>{content}</h3>
                <h5>{publicationDate}</h5>
            </div>
            <div>
                <button onClick = {()=>setVisibility(!visibility)}>Atualizar</button>
            </div>
            <div className={visibility ? `modal active` : `modal`}>
                <FormUpdate id= {id} subject={subject} content={content}/>
                <div className="modal-close">
                    <button onClick = {()=>setVisibility(!visibility)}>Cancelar</button>
                </div>    
            </div>
        </div>
    );
}


export default Secret;