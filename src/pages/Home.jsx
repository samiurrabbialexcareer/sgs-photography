import React from 'react';
import Hero from '../components/Hero';
import AboutTeaser from '../components/AboutTeaser';
import FeaturedWork from '../components/FeaturedWork';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <AboutTeaser />
            <FeaturedWork />
        </div>
    );
};

export default Home;
