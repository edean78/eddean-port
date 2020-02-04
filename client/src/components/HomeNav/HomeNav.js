import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNav.css';

function HomeNav() {
    return (
        <nav class="nav-center s12" role="navigation">
            <div class="nav-wrapper container">
                <ul id="nav-mobile" class="">
                    <li className="nav-item">
                        <Link to='/'
                        className={window.location.pathname === '/' || window.location.pathname === '/home' ? 'nav-link active' : 'nav-link'}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact_me'
                        className={window.location.pathname === '/contact_me' ? 'nav-link active' : 'nav-link'}>
                            Contact Me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio'
                        className={window.location.pathname === '/portfolio' ? 'nav-link active' : 'nav-link'}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/resume'
                        className={window.location.pathname === '/resume' ? 'nav-link active' : 'nav-link'}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default HomeNav;