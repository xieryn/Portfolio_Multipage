import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <p className="logo" id="home">
                <span>M</span>aryanaa.
            </p>

            <i
                className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}
                id="menu-icon"
                onClick={handleMenuClick}
            />

            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="active" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
        </header>
    );
};

export default Navbar;
