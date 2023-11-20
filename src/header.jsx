import React from "react";
import "./style.css"
import logo from "./logo.png"
import { NavLink } from "react-router-dom";

function Header()
{
    return<div className="main"> <header>
    <img src={logo} alt="" className="logo" ></img>
            <NavLink to="/movie" className="options1"><h2>Movie</h2></NavLink>
            <NavLink to="/show"className="options2"><h2>Show</h2></NavLink>
            <NavLink to="/about" className="options3"><h2>About</h2></NavLink>        
    <input className="search" type="search" name="" id="" size={35} placeholder="Search..."/>
    </header>
    </div>

}
export default Header;