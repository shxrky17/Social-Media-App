import React from 'react'
import "./register.css"

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
                    <input placeholder="username" type="text" className="logininput"/>
                    <input placeholder="enter email" type="email" className="logininput"/>
                    <input placeholder="enter password" type="password" className="logininput"/>

                    <input placeholder="enter password again" type="password" className="logininput"/>
                    <button className="loginbtn">Sign up</button>
                    
                    <button className="loginregisterbutton">Login to account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login

