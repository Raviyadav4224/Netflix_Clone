import React from "react";
import "./Header.scss";
import logo from "../Logonetflix.png";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/netflix_clone");
  };
  return (
    <>
      <nav className="header ">
        <img src={logo} alt="logo" onClick={handleClick} />

        <div className="active">
          <Link to="/tvshows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recentlyAdded">Recently Added</Link>
          <Link to="/myList">My List</Link>
        </div>
        <BiSearch />
        {isAuthenticated ? (
          <Link to="/me">
            <CgProfile />
          </Link>
        ) : (
          <Link to="/login">
            <CgProfile />
          </Link>
        )}
      </nav>
    </>
  );
};

export default Header;
