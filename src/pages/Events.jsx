import React from 'react';
import FeaturedWork from '../components/FeaturedWork';

const Events = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Events Photography</h1>
                <p>Live coverage for corporate galas, concerts, and private functions.</p>
            </div>
            <FeaturedWork initialCategory="Events" showFilters={false} />
        </div>
    );
};

export default Events;
