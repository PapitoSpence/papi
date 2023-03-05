import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Navbar component */}
      <nav className="NAVBAR">
        {/* Container for navigation links */}
        <div className="navbar-links">
          {/* Link to homepage */}
          <Link to="/">
            {/* Logo image */}
            <img className="nav-logo" 
              alt="logo"
              src="https://images-platform.99static.com//-H_wgTeNs6IveGAeBL5cnonW2UE=/151x136:1849x1834/fit-in/500x500/99designs-contests-attachments/121/121665/attachment_121665077"
            />
          </Link>
          {/* Link to animal list page */}
          <Link className="img-nav" to="/animalList">
            HAVE ME
          </Link>
          <Link className="img-nav" to='/AddPet'>
            Add Pet
          </Link>
          {/* Link to organization list page */}
          <Link className="img-nav" to="/organizationList">
            <span>CONTACTS </span>
          </Link>
          {/* Link to sign up page */}
          <Link className="img-nav" to="/login">
            SIGN UP
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
