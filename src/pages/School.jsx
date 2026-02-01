import React from 'react';
import FeaturedWork from '../components/FeaturedWork';

const School = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>School Photography</h1>
                <p>Capturing the milestones of education, from yearbook portraits to graduation ceremonies.</p>
            </div>
            <FeaturedWork initialCategory="School" showFilters={false} />

            <div className="sub-categories">
                <div className="sub-cat">
                    <h3>Yearbook</h3>
                    <p>Professional lighting and posing for consistent, high-quality yearbook photos.</p>
                </div>
                <div className="sub-cat">
                    <h3>Graduation</h3>
                    <p>Commemorating the achievement with individual and group portraits.</p>
                </div>
                <div className="sub-cat">
                    <h3>Events & Theater</h3>
                    <p>Action shots and atmospheric coverage of school productions and sports.</p>
                </div>
            </div>
        </div>
    );
};

export default School;
