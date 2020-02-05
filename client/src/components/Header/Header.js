import React from 'react';
import HomeNav from '../HomeNav/HomeNav';
import './Header.css';

function Header() {
    return (
        <div className="jumbotron" id="jumboHeader">
            <div className="container">
                <img src="https://live.staticflickr.com/65535/49484113731_83e716da30.jpg" alt="profilepic"></img>
                <h1 className="Name">Edward Dean</h1>
                <p className="title">GIS Professional/Aspiring Web Developer</p>
                <HomeNav />
            </div>
        </div>
    );
}

export default Header;