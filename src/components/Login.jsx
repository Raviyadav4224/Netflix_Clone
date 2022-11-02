import React, { useState } from "react";
import "./Login.scss";
const Login = () => {
  const url = `https://www.pixelstalk.net/wp-content/uploads/images6/Netflix-Daredevil-Wallpaper-HD.jpg`;
  const [email,setEmail]=useState()
  const [pw,setPw]=useState()
  return (
    <section>
      <div className="cover" style={{ backgroundImage: `url(${url})` }}>
        <form className="login" onSubmit={()=>console.log("form Submitted")}>
          <h1>Sign In</h1>
          <input type="email" value={email} placeholder="Email or phone number" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)}placeholder="Password" />
          <button>Sign In</button>
          <label htmlFor="">
            <input type="checkbox" /> Remember me
          </label>
        </form>
      </div>
    </section>
  );
};

export default Login;
