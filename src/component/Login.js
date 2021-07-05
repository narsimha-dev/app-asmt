import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginInfo } from './redux/actions/userAction';
import { useHistory } from "react-router-dom";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const {userEmail, userPassword} = useSelector((state) => state)
    console.log("state: ", userEmail, ":",userPassword )
    const dispatch = useDispatch();
    let history = useHistory();


    const handleSubmit=(e)=>{
       e.preventDefault()
       if((email === userEmail) && (password === userPassword)){
            dispatch(loginInfo("LOGIN", true))
            console.log(history.push("/users"))
       }else{
           dispatch(loginInfo("FAILUR", false))
       }
    }
         return (
            <Fragment>
                <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
                    <form className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
                          onSubmit={handleSubmit}>
                        <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
                        <input type="email" 
                               name="email" 
                               value={email}
                               className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" 
                               autoComplete="off" 
                               placeholder="Email" 
                               onChange={(e) => setEmail(e.target.value)}
                               required />
                        <input type="password" 
                               name="password" 
                               value={password}
                               className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" 
                               autoComplete="off" 
                               placeholder="Password" 
                               onChange={(e) => setPassword(e.target.value)}
                               required />
                        <button className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80" 
                                id="login" 
                                type="submit">
                            <span>Login</span>
                            </button>
                    </form>
                </div>
            </Fragment>
        );
}
export default Login