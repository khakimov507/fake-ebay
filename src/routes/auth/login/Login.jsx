import React from 'react'
import c from "./Login.module.scss";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate()

function loginUser(e){
  e.preventDefault();
  axios.post("https://api.escuelajs.co/api/v1/auth/login", {
    email: userEmail,
    password: userPassword
  })
  .then(response => console.log(response.data))
  .catch(err => console.log(err))
  alert("You successfuly logged in")
  navigate("/")
}

  return (
    <div>
      <form onSubmit={loginUser} className={c.login__form}>
        <input required type="email"  placeholder={("email")} onChange={(e) => setUserEmail(e.target.value)}/>
        <input required type="password"  placeholder={("password")} onChange={(e) => setUserPassword(e.target.value)}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login