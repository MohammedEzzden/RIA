import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

 function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-tertiary bg-dark ">
    <div className="container-fluid">
      <a className="navbar-brand ms-5" href="#"><img src={logo} alt='logo' style={{width:'35px'}}></img></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>
          <i className='fas fa-bars' style={{color:"#fff"}}></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item-active">
            <a className="nav-link active text-white text-uppercase ms-5"  href="/">Home&nbsp;<i class="fa-solid fa-house">
                </i></a>
            
          </li>
          <li className="nav-item-active">
            <a className="nav-link active text-white text-uppercase ms-5"  href="/news">News</a>
            
          </li>
          <li className="nav-item-active">
            <a className="nav-link active text-white text-uppercase ms-5"  href="/Contacts">Contact Us</a>
            
          </li>
          
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button 
          
          className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  );
}
export default Navbar;
