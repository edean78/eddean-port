import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row media-icons">
                    <a href="https://github.com/edean78" title="Github Profile" target="_blank"><i className="fab fa-github" style="font-size: 24px; color: white;"></i></a>
                    <a href="https://www.linkedin.com/in/edean78/" title="Linked In Profile" target="_blank"><i className="fab fa-linkedin-in" style="font-size: 24px; color: white;"></i></a>
                    <a href="https://www.facebook.com/eddean78" title="Facebook Profile" target="_blank"><i className="fab fa-facebook" style="font-size: 24px; color: white;"></i></a>
                    <a href="https://twitter.com/eddean78" title="Twitter Profile" target="_blank"><i className="fab fa-twitter" style="font-size: 24px; color: white;"></i></a>
                    <a href="https://www.instagram.com/eddeaniii/" title="Instagram Profile" target="_blank"><i className="fab fa-instagram" style="font-size: 24px; color: white;"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;