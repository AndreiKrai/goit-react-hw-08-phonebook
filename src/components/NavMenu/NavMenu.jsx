import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavMenu() {
  return (
    <div className="container-fluid " style={{ paddingLeft: '30px' }}>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
