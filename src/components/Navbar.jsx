// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className={`navbar ${isMobile ? 'responsive' : ''}`}>
            <div className="nav-logo">My Portfolio</div>
            <ul className={`nav-links ${isMobile ? 'show' : ''}`}>
                <li className="nav-item"><a href="#about" onClick={() => setIsMobile(false)}>About</a></li>
                <li className="nav-item"><a href="#skills" onClick={() => setIsMobile(false)}>My Skills</a></li>
                <li className="nav-item"><a href="#projects" onClick={() => setIsMobile(false)}>Projects</a></li>
                {/* Removed the Contact link */}
            </ul>
            <button className="nav-toggle" onClick={toggleMenu}>
                {isMobile ? 'Close' : 'Menu'}
            </button>
        </nav>
    );
};

export default Navbar;