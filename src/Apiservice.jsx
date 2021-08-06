
export default class Apiservice {

    static UpdatedArticle(article_id, body) {
        return fetch(`http://127.0.0.1:8000/api/article/${article_id}/`, {
            'method': 'PUT',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': 'Token d3d5ce1747a082a41308ecbcdfa463e36ae8fecf'
            // },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static UpdateArticle(article_id, body) {
        return fetch(`http://127.0.0.1:8000/api/article/${article_id}/`, {
            'method': 'PATCH',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': 'Token d3d5ce1747a082a41308ecbcdfa463e36ae8fecf'
            // },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static InsertArticle(body) {
            return fetch('http://127.0.0.1:8000/api/article/', {

            'method': 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': 'Token d3d5ce1747a082a41308ecbcdfa463e36ae8fecf'
            // },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
        .catch(error => console.log(error))
    }

    static DeleteArticle(article_id) {
        return fetch(`http://127.0.0.1:8000/api/article/${article_id}/`, {
            'method': 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': 'Token d3d5ce1747a082a41308ecbcdfa463e36ae8fecf'
            // }
        })
    }

    static LoginUser(body) {
        return fetch('http://127.0.0.1:8000/api_token/', {
            'method': 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
        // .catch(error => console.log(error))
    }
    
    static RegisterUser(body) {
        return fetch('http://127.0.0.1:8000/api/user/', {
            'method': 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
        // .catch(error => console.log(error))
    }

}
