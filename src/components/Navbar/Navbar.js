import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () =>

    <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">Nitya Kandukuri</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Projects</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>

export default Navbar;
