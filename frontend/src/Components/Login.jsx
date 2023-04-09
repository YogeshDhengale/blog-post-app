import React, { useState } from 'react'
import { getLogin } from '../utils/api'
import {useNavigate, Link} from 'react-router-dom'

const Login = () => {
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const navigate=useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await getLogin(email, password);
            console.log(data);
        
            if (data.error) {
              alert(data.error);
            } else {
              localStorage.setItem("user", JSON.stringify(data));
              navigate('/HomePage') 
            }
          } catch (error) {
            console.error(error);
            alert("An error occurred during login. Please try again.");
          }
          
      };
      
     
    return (
        <>
            <div className="loginpage">
                <div className="elipse1"></div>
                <div className="elipse2"></div>
                <div className="logincard">
                    <div className="logo">
                        <h1>LOGO</h1>
                        <p>Please Enter Credientials below</p>
                    </div>
                    <div className="inputs-btn">
                        <div className="input">
                            <input type="email" name="" id="" className='email' placeholder='Users Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type="password" name="" id="" className="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className="btn">
                            <button class="bn632-hover bn26" onClick={handleLogin}>Login</button>
                            <p >New User pleaase <Link to="/signup" className="signupLink">Register</Link> first.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login