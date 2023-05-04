import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import c from "./Register.module.scss"

const Register = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  });
  function registeration(e){
    e.preventDefault();
    axios.post("https://api.escuelajs.co/api/v1/users/", userdata)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <form className={c.form__input} onSubmit={registeration}>
        <input required type="text" placeholder='Your name' value={userdata.name} onChange={(e)=> setUserdata({...userdata, name: e.target.value})}/>
        <input required type="email" placeholder='Your email' value={userdata.email} onChange={(e)=> setUserdata({...userdata, email: e.target.value})}/>
        <input required minLength={8} type="password" placeholder='Your password' value={userdata.password} onChange={(e)=> setUserdata({...userdata, password: e.target.value})}/>
        <input required type="url" placeholder='Your avatar' value={userdata.avatar} onChange={(e)=> setUserdata({...userdata, avatar: e.target.value})}/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register