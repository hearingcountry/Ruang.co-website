import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from '../assets/LogoImages/Logo.png';
import { Logo, AnchorLink, Button } from './NavbarStyles';

function TopNavbar() {
  function MouseOver(e) {
    e.target.style.background = "#1976d2";
  }

  function MouseOut(event) {
    event.target.style.background = "#736DEF";
  }

  const hover = e => {
    e.target.style.color = "#736DEF"
  };

  const hoverOut = e => {
    e.target.style.color = "#656565"
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="ms-5" src={NavbarLogo} alt="Ruang.co Logo" style={Logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" onMouseOver={hover} onMouseOut={hoverOut} aria-current="page" to="/" style={AnchorLink}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onMouseOver={hover} onMouseOut={hoverOut} to="/browse" style={AnchorLink}>Browse</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onMouseOver={hover} onMouseOut={hoverOut} aria-current="page" to="/" style={AnchorLink}>About</Link>
            </li>
            <li className="nav-item">
              <a href="#about-us" className="nav-link" onMouseOver={hover} onMouseOut={hoverOut} style={AnchorLink}>Contact Us</a>
            </li>
          </ul>

          <div className="d-flex">
            <Link to="/register">
              <button onMouseOver={MouseOver} onMouseOut={MouseOut} className="btn text-white px-4" type="button" style={Button}>Sign Up</button>
            </Link>

            <Link to="/login">
              <button onMouseOver={MouseOver} onMouseOut={MouseOut} className="btn mx-3 text-white px-4" type="button" style={Button}>Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;