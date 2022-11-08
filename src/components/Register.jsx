import React, { useState } from "react";
import './Login.scss'
import { useDispatch } from "react-redux";
import {login} from '../redux//actions/user.js'
import { Link } from "react-router-dom";
const Register = () => {
  const url = `https://www.pixelstalk.net/wp-content/uploads/images6/Netflix-Daredevil-Wallpaper-HD.jpg`;
  const [email,setEmail]=useState('')
  const [password,setPw]=useState('')
  const [username,setUsername]=useState('')
  const dispatch=useDispatch((state)=>state.user)
  const handleSubmit=async (e)=>{
    e.preventDefault()
    dispatch(login(email,password,username))
    setEmail('')
    setPw('')
    setUsername('')

  }
  return (
    <section>
      <div className="cover" style={{ backgroundImage: `url(${url})` }}>
        <form className="login" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
          <input type="email" value={email} placeholder="Email or phone number" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" value={password} onChange={(e)=>setPw(e.target.value)}placeholder="Password" />
          <button type="submit">Sign Up</button>
          <p>Already registered ? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </section>
  );
};

export default Register;
