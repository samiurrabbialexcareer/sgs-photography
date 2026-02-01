import React from 'react';
import { Link } from 'react-router-dom';
import './AboutTeaser.css';

const AboutTeaser = () => {
    return (
        <section className="about-teaser">
            <div className="about-content">
                <h2>About SGS</h2>
                <p>
                    We are more than just photographers; we are storytellers. With a passion for capturing the authentic essence of every subject,
                    SGS Photography Agency has been delivering high-end visual content for schools, enterprises, and memorable events.
                </p>
                <p>
                    Our team combines technical expertise with an artistic eye to produce images that stand the test of time.
                </p>
                <Link to="/about" className="btn-text">Read More &rarr;</Link>
            </div>
            <div className="about-image">
                {/* Placeholder for a team or studio shot */}
                <div className="placeholder-box">SGS Studio</div>
            </div>
        </section>
    );
};

export default AboutTeaser;
