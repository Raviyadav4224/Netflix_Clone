import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  loadAllUsers,
  loadUser,
  logout,
} from "../redux/actions/user.js";
import "./UserProfile.scss";
import Tables from "./Tables.jsx";
import { TailSpin } from "react-loader-spinner";

const UserProfile = () => {
  let { loading, userInfo, allUsersInfo, error, message } = useSelector(
    (state) => state.user
  );
  const defaultProfilePic =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png";
  // console.log('userdata is',userInfo.avatar.url,typeof(userInfo.avatar.url));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  useEffect(() => {
    document.title = "Account Details";
    dispatch(loadUser());
    if (userInfo.role === "admin") {
      dispatch(loadAllUsers());
    }

    if (error) {
      dispatch({ type: "clearError" });
    }

    if (message) {
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, userInfo.role, error, message]);
  const handleClick = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <section className="cover">
        {loading ? (
          <TailSpin
            height="80"
            width="80"
            color="#e50914"
            ariaLabel="tail-spin-loading"
            radius="2"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <>
            <div className="userDetails">
              <img
                src={
                  (userInfo && userInfo.avatar && userInfo.avatar.url) ||
                  defaultProfilePic
                }
                alt=""
              />
              <h1>Hi {userInfo.username}</h1>
              <p>{userInfo.email}</p>
              <h3>
                Role - <span style={{ color: "green" }}>{userInfo.role}</span>
              </h3>
              <button onClick={handleClick}>Logout</button>
            </div>
            {userInfo.role === "admin" ? (
              <Tables allUsersInfo={allUsersInfo} handleDelete={handleDelete} />
            ) : null}
          </>
        )}
      </section>
    </>
  );
};

export default UserProfile;
