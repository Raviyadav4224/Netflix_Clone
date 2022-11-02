import React from "react";
import "./Header.scss";
import logo from "../Logonetflix.png";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
const Header = () => {
const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/')
  }
  return (
    <nav className="header">
      <img src={logo} alt="logo" onClick={handleClick}/>

      <div>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyAdded">Recently Added</Link>
        <Link to="/myList">My List</Link>
      </div>
      <BiSearch />
      <button><Link to='/login'>Login</Link></button>
    </nav>
  );
};

export default Header;
