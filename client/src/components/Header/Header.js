import React from 'react';
import HomeNav from '../HomeNav/HomeNav';
import './Header.css';

function Header() {
    return (
        <header class="page-header">
            <div class="container">
                <div class="row">
                    <img src="https://live.staticflickr.com/65535/49484113731_83e716da30.jpg" alt="profilepic"></img>
                        <h4>Edward E. Dean III</h4>
                </div>
                <HomeNav />
            </div>
        </header>
    );   
}
                
export default Header;

