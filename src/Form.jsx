import React,{useState,useEffect} from 'react'
import Apiservice from './Apiservice'

const  Form = (props) => {
    const [title, settitle] = useState('')
    const [descryption, setdescryption] = useState('')

    const updatedarticle = () => {
        Apiservice.UpdatedArticle(props.article.id, {title, descryption})
        Apiservice.UpdateArticle(props.article.id, {title, descryption})
        .then(resp => props.updatedInformation(resp))
    }
    
    const insertArticle = () => {
        Apiservice.InsertArticle({title, descryption})
        .then(resp => props.InsertInformation(resp))
        .then(resp => console.log(resp))
    }

    useEffect(() => {
        settitle(props.article.title)
        setdescryption(props.article.descryption)
    }, [props.article])


    return (
        <div>
            {props.article ? (
                <div className="mb-3">
                    <label htmlFor="title" className="form-lable">Title</label>
                    <input type="text" className="form-control" placeholder="please enter the value" value={title} onChange={e => settitle(e.target.value)}></input>
                    
                    <label htmlFor="description" className="form-lable mt-2">Description</label>
                    <textarea type="text" className="form-control" rows="5" value={descryption} onChange={e => setdescryption(e.target.value)}></textarea>
                </div>
            ) : null}

            {
                props.article.id ?  <button onClick = {updatedarticle} className="btn btn-success">Update Article</button>
                : <button onClick = {insertArticle} className="btn btn-success">Insert Article</button>
            }
        </div>
    )
}

export default Form
