import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from '../assets/LogoImages/Logo.png';

function TopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="ms-5" src={NavbarLogo} alt="Ruang.co Logo" style={{
            width: '104px', height: '28px'
          }} />
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
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                style={{
                  color: '#656565',
                  fontSize: '16px',
                  fontWeight: '400',
                  letterSpacing: '0.005em',
                  "&:hover": {
                    color: "#736def",
                    fontWeight: '500'
                  }
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/browse"
                style={{
                  color: '#656565',
                  fontSize: '16px',
                  fontWeight: '400',
                  letterSpacing: '0.005em',
                  "&:hover": {
                    color: "#736def",
                    fontWeight: '500'
                  }
                }}
              >
                Browse
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                style={{
                  color: '#656565',
                  fontSize: '16px',
                  fontWeight: '400',
                  letterSpacing: '0.005em',
                  "&:hover": {
                    color: "#736def",
                    fontWeight: '500'
                  }
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  color: '#656565',
                  fontSize: '16px',
                  fontWeight: '400',
                  letterSpacing: '0.005em',
                  "&:hover": {
                    color: "#736def",
                    fontWeight: '500'
                  }
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div class="d-flex">
            <Link to="/register">
              <button class="btn text-white px-4" type="button" style={{ background: "#736DEF" }}>Sign Up</button>
            </Link>

            <Link to="/login">
              <button class="btn mx-3 text-white px-4" type="button" style={{ background: "#736def" }}>Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;