import React,{useState} from 'react'
import './style.css'
import FormUpdate from '../FormUpdate'

function Secret({id, subject, content, publicationDate}) {
    const [visibility, setVisibility] = useState(false)
    const dateFormat = () => {
        const data = new Date()
        let day = data.getDate()
        let month = data.getMonth() + 1
        let year = data.getFullYear()

        if (day.toString().length === 1)
            day = '0' + day
        if (month.toString().length === 1)
            month = '0' + month

        return day + '/' + month + '/' + year
    }  
    return (
        <div>
            <div className="secret">
                <div>
                    <h3>{subject}</h3>
                    <h6>Data de Publicação: {dateFormat(publicationDate)}</h6>  
                    <p>{content}</p>  
                </div>
                <div>
                    <button className="btn btn-primarybtn btn-outline-primary" onClick = {()=>setVisibility(!visibility)}>Editar Segredo</button>
                </div>
                <div className={visibility ? `modal.active` : `modal`}>
                    <FormUpdate id={id} subject={subject} content={content}/>
                </div>
            </div>
            <br/>
        </div>
        
    );
}


export default Secret;