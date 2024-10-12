import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar'>
            <div className='hamburger' onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/Blog" onClick={toggleMenu}>Blogs</Link></li>
                <li><Link to="/Create" onClick={toggleMenu}>Create Blog</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
