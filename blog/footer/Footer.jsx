import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p className="footer-text">&copy; 2024 Blog App. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Service</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </div>
    );
}

export default Footer;
