import React from 'react';
import FeaturedWork from '../components/FeaturedWork';

const Enterprise = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Enterprise Photography</h1>
                <p>Professional imagery for your brand, team, and corporate events.</p>
            </div>
            <FeaturedWork initialCategory="Enterprise" showFilters={false} />
        </div>
    );
};

export default Enterprise;
