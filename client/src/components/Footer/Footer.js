import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="page-footer">
            <div className="container" id="media-icons">
                <a href="https://github.com/edean78" title="Github Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" ></i></a>
                <a href="https://www.linkedin.com/in/edean78/" title="Linked In Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/eddean78" title="Facebook Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com/eddean78" title="Twitter Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/eddeaniii/" title="Instagram Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
        </footer>
    );
}

export default Footer;