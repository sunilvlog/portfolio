import React, {useState,useEffect} from "react"
import Form from "./Form"
import Apiservice from "./Apiservice"
import axios from 'axios'

const Blogs = () => {

    const [articles,setarticle] = useState([])
    const [editarticle,seteditarticle] = useState(null)
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/article/', {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': 'Token d3d5ce1747a082a41308ecbcdfa463e36ae8fecf'
            // }
        })
        .then(resp => resp.json())
        .then(resp => setarticle(resp))
        .catch(error => console.log(error))

    }, [])

    const Editbtn = (article) => {
        seteditarticle(article)
    }
    const updatedInformation = (article) => {
        const new_article = articles.map(myarticle => {
            if (myarticle.id === article.id) {
                return article;
            }
            else {
                return myarticle;
            }
        })
        setarticle(new_article)
    }
const InsertInformation = (article) => {
    const new_article = [...articles, article]
    setarticle(new_article)
    seteditarticle({title:"",descryption:""})
}

    const insertArticle = () => {
        seteditarticle({title:"",descryption:""})
    }
    const DeleteBtn = (article) => {
        Apiservice.DeleteArticle(article.id)
        const new_article = articles.filter(myarticle => {
            if (myarticle.id === article.id) {
                return false
            }
            else {
                return true
            }
        })
        // .then(() => new_article) 
        setarticle(new_article)
    }
    
    return (
            <div className="container-fluid mt-1">
                <div className="App">
                    <div className="row">
                        <div className="col">
                            <h1>Blogs</h1>
                        </div>
                        <div className="col">
                        <button className="btn btn-primary" onClick={insertArticle}>Insert Article</button>
                        </div>
                    </div>
                    <div>
                        {articles.map(article => {
                            return (
                                <div key = {article.id}>
                                    <h1> {article.title} </h1>
                                    <p>{article.descryption} </p>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <button className="btn btn-primary" onClick={() =>Editbtn(article)}>Update</button>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-danger" onClick={()=>DeleteBtn(article)}>Delete</button>
                                        </div>    
                                    </div>
                                    <hr />
                                </div>
                                
                            )
                        })}
                    </div>
                    {editarticle ? <Form article= {editarticle} updatedInformation = {updatedInformation} InsertInformation = {InsertInformation} /> : null}
                    
                    
                </div>
            </div>
    )
}
export default Blogs