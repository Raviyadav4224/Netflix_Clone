import React, { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { login } from "../redux//actions/user.js";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = ({ isAuthenticated ,error}) => {
  const url = `https://www.pixelstalk.net/wp-content/uploads/images6/Netflix-Daredevil-Wallpaper-HD.jpg`;
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign In";
  });

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPw("");
  };
  return (
    <>
      {isAuthenticated ? (
        navigate("/")
      ) : (
        <section>
          <div className="cover" style={{ backgroundImage: `url(${url})` }}>
            <form className="login" onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              <input
                type="email"
                value={email}
                placeholder="Email or phone number"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPw(e.target.value)}
                placeholder="Password"
              />
              <button type="submit">Sign In</button>
              <label htmlFor="remember">
                <input type="checkbox" /> Remember me
              </label>
              <p>
                New to Netflix ? <Link to="/register">Create an account</Link>
              </p>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
