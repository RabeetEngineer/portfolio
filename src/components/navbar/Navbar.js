import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import '../../pages/Contact'

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
          <Link to="/">  <img src="/images/logo.png" className="logo-name" alt="" /> </Link>

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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item  ">
                  <Link class="nav-link nav-items" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-items" to="/projects">
                    Projects
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-items" to="/contact-us">
                    Contact me
                  </Link>
                </li>
              </ul>
              <button type="button" class="btn btn-navbar ms-auto ">
                Let's Talk.
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
