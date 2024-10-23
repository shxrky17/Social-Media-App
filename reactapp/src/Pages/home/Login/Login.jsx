import React from 'react'
import "./login.css"
function Login() {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginnlogo">Mama social</h3>
                <span className="logindesc"> duniya se connect kro</span>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input placeholder="enter email" type="email" className="logininput"/>
                    <input placeholder="enter password" type="password" className="logininput"/>
                    <button className="loginbtn">Login</button>
                    <span className="loginforgot">Forgot  password</span>
                    <button className="loginregisterbutton">Create a new account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
