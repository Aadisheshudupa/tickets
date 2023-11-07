import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter,Link } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Link to="/home">home</Link>
  <Link to="/movie">movie</Link>
   
  </BrowserRouter>

,document.getElementById("root"));








