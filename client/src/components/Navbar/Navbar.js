import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                <img src="https://live.staticflickr.com/65535/49435877052_170647b629_o.png" alt="banner" className="brand-logo-small"></img>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/"
                            className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                            Home
                         </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            to="/contact_us"
                            className={window.location.pathname === "/about_us" ? "nav-link active" : "nav-link"}>
                            Contact Us
                         </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            to="/portfolio"
                            className={window.location.pathname === "/products" ? "nav-link active" : "nav-link"}>
                            Portfolio
                         </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            to="/resume"
                            className={window.location.pathname === "/contact_us" ? "nav-link active" : "nav-link"}>
                            Resume
                         </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;