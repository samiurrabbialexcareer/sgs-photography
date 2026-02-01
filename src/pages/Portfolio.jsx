import React from 'react';
import FeaturedWork from '../components/FeaturedWork';

const Portfolio = () => {
    return (
        <div className="portfolio-page" style={{ paddingTop: '2rem' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '1rem' }}>Our Portfolio</h1>
                <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Explore our diverse collection of moments captured in time. From school years to corporate milestones.
                </p>
            </div>
            <FeaturedWork />
        </div>
    );
};

export default Portfolio;
