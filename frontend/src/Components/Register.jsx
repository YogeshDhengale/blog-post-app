import React, { useState } from 'react'
import { getRegister } from '../utils/api'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()

    const handleRegister = async (e) => {
        //console.log(email, password, role)
        e.preventDefault();
        if (!role || !email || !password) {
            alert("All field are Requiered")
        }

        try {
            const data = await getRegister(email, password, role);
            console.log(data);
            if (data.error) {
                alert(data.error);
            }else{
                navigate('/')
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred during login. Please try again.");
        }
        
    }



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
                            <input type="email" name="" id="" className='email' placeholder='Users Email' onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="password" name="" id="" className="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                            <select name="" id="" className='password' placeholder='please select your role' onChange={(e) => { setRole(e.target.value) }}>
                                <option value="">Please Select Your Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Author">Author</option>
                                <option value="Reader">Reader</option>
                            </select>
                        </div>
                        <div className="btn">
                            <button class="bn632-hover bn26"  onClick={handleRegister}>Register</button>
                            <p >Exicting users <Link to="/" className="signupLink">Login</Link> please.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register