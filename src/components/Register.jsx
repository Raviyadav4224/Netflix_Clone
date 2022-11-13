import React, { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { register } from "../redux//actions/user.js";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
const Register = ({ isAuthenticated, loading }) => {
  const url = `https://www.pixelstalk.net/wp-content/uploads/images6/Netflix-Daredevil-Wallpaper-HD.jpg`;
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign Up Now";
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  const dispatch = useDispatch((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("username", username);
    myForm.append("password", password);
    myForm.append("email", email);
    myForm.append("file", profilePic);
    dispatch(register(myForm));
    setEmail("");
    setPw("");
    setUsername("");
    setProfilePic("");
  };
  return (
    <>
      <section>
        <div className="cover" style={{ backgroundImage: `url(${url})` }}>
          <form className="login" onSubmit={handleSubmit}>
            {loading ? (
              <TailSpin
                height="180"
                width="380"
                color="#e50914"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <>
                <h1>Sign Up</h1>
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
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
                <div className="profilePic">
                  <input
                    type="file"
                    onChange={(e) => {
                      console.log("file selected", e.target.files);
                      return setProfilePic(e.target.files[0]);
                    }}
                  />
                </div>
                <button type="submit">Sign Up</button>
                <p>
                  Already registered ? <Link to="/login">Login</Link>
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
