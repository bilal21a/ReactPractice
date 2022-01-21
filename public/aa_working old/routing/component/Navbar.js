import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return<>
<nav className="navbar navbar-expand-lg navbar-light bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? 'active nav-link white_color' : 'inactive nav-link')} aria-current="page" to="/">Home</NavLink>

        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? 'active nav-link white_color' : 'inactive nav-link')} aria-current="page" to="/news/Sports">News</NavLink>
                            
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>;
}
