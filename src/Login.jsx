import React, {useState,useEffect} from 'react'
import Apiservice from './Apiservice';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [username, setusername] = useState('')
    const [password,setpassword] = useState('')
    const [islogin, setlogin] = useState('')
    const [token, settoken] = useCookies(['mytoken'])
    let history = useHistory()

    useEffect(() => {
        if (token['mytoken']) {
            history.push('/article')
        }
    }, [token])

    const loginBtn = () => {
        Apiservice.LoginUser({username,password})
        .then(resp => settoken(resp.token))
        .catch(error => console.log(error))
    }

    const registerBtn = () => {
        Apiservice.RegisterUser({username,password})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }
    return (
        <>
            <div className="container App">
                <div className="row">
                    <h1 className="text-center mb-3">Please Login</h1>
                    <div className="col-md-6 col-10 mx-auto">
                            <div className="">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" placeholder="please enter your username" value={username} onChange = {e => setusername(e.target.value) } />
                            </div>
                            <div className="">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="please enter your password" value={password} onChange = {e => setpassword(e.target.value)} />
                            </div>
                            <div className="mt-2">
                                <button onClick = {loginBtn} className="btn btn-primary">Log in</button>
                            </div>
                            {islogin ? <p className='mt-2'>if you don't have account please <button onClick = {registerBtn} className="btn btn-primary">Resister</button>Here</p> : <p className='mt-2'>if you have account please <button onClick = {loginBtn} className="btn btn-primary">Login</button>Here</p>}
                             
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login