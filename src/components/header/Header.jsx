import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="mx-auto container px-5 py-4 navbar navbar-expand-lg text-white bg-dark d-flex align-items-center">
      <div className="container-fluid">
        <p className="text-white fw-bold navbar-brand" href="#">
          Movie Theatre
        </p>

        <button
          className="navbar-toggler"
          type="button"
          color="#FFFFFF"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="text-decoration-none homeLink" to="/">
                <p
                  className="homeLink text-white nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <p className="text-white nav-link" href="#">
                Blog
              </p>
            </li>
            <li className="nav-item">
              <p className="text-white nav-link" aria-current="page" href="#">
                Login
              </p>
            </li>
            <li className="nav-item">
              <p className="text-white nav-link" aria-current="page" href="#">
                Register
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
