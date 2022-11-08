import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../redux/actions/user.js";
import "./UserProfile.scss";

const UserProfile = () => {
  const { loading, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("Data received in UserProfile Page is ", userInfo);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
const handleClick=()=>{
  dispatch(logout())
}
  return (
    <>
      <section className="cover">
        {loading ? (
          <h1 style={{ height: "100px", backgroundColor: "yellow" }}>
            Loading Data
          </h1>
        ) : (
          <div>
            <h1>{userInfo.username}</h1>
            <p>{userInfo.email}</p>
            <h3>{userInfo.role}</h3>
            <button onClick={handleClick}>Logout</button>
          </div>
        )}
      </section>
    </>
  );
};

export default UserProfile;
