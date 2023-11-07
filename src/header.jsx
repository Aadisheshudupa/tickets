import React from "react";
import "./style.css"
import logo from "./logo.png"
import { NavLink } from "react-router-dom";

function Header()
{
    return<div className="main"> <header>
    <img src={logo} alt="" className="logo" ></img>
           <NavLink to="/movie" className="options1"><h2>Movie</h2></NavLink>
            <a href="#" className="options2"><h2>Show</h2></a>
            <a href="#" className="options3"><h2>Sports</h2></a>        
    <input className="search" type="search" name="" id="" size={35} placeholder="Search..."/>
    </header>
    </div>

}
export default Header;