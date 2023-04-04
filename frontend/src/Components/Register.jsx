import React from 'react'

const Register = () => {
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
                            <input type="email" name="" id="" className='email' placeholder='Users Email' />
                            <input type="password" name="" id="" className="password" placeholder='Password' />
                            <select name="" id="" className='password' placeholder='please select your role'>
                                <option value="">Please Select Your Role</option>
                                <option value="">Admin</option>
                                <option value="">Author</option>
                                <option value="">Reader</option>
                            </select>
                        </div>
                        <div className="btn">
                            <button class="bn632-hover bn26">Register</button>
                            <p >Exicting users <a href="/" className="signupLink">Login</a> please.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Register