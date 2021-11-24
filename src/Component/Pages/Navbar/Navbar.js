import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import logo from "../../../images/logos/logo.png"
import useAuth from '../../../Hook/useAuth';

const Navbar = () => {
  const{user,signout}=useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light background">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div className="me-auto">
        <img src={logo} className="navbar-brand " alt="" />
      </div>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          
             <Link className="nav-link active" aria-current="page" to="/dash">DashBoard</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">Our Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/team">Our Team</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item"> 
          {
            user.email ? <button onClick={signout} className="btn btn-danger">Log Out</button>:<Link className="nav-link" to="/login">Login</Link>
          }
          
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;