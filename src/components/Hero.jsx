import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-background" style={{ backgroundImage: "url('/images/hero.png')" }}></div>
            <div className="hero-content">
                <h1>Capturing the <span>Essence</span> of Life</h1>
                <p>Professional photography for schools, enterprises, and events. We turn moments into timeless art.</p>
                <div className="hero-buttons">
                    <a href="/contact" className="btn btn-primary">Book a Session</a>
                    <a href="/portfolio" className="btn btn-secondary">View Portfolio</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
