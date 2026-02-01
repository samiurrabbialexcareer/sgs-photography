import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SGS <span>Photography</span>
                </Link>
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-item" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/portfolio" className="navbar-item" onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <div className="navbar-item dropdown">
                        <span>Services</span>
                        <div className="dropdown-content">
                            <Link to="/school" onClick={() => setIsOpen(false)}>School</Link>
                            <Link to="/enterprise" onClick={() => setIsOpen(false)}>Enterprise</Link>
                            <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
                            <Link to="/composite" onClick={() => setIsOpen(false)}>Composite</Link>
                        </div>
                    </div>
                    <Link to="/about" className="navbar-item" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/reviews" className="navbar-item" onClick={() => setIsOpen(false)}>Reviews</Link>
                    <Link to="/contact" className="navbar-item btn-contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
