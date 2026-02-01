import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>SGS Photography</h3>
                    <p>Capturing life's most precious moments with artistic excellence.</p>
                </div>
                <div className="footer-section">
                    <h4>Explore</h4>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/school">School Photography</Link>
                    <Link to="/enterprise">Enterprise</Link>
                    <Link to="/events">Events</Link>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: info@sgsphotography.com</p>
                    <p>Phone: (555) 123-4567</p>
                    <div className="footer-socials">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SGS Photography Agency. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
