import React, { useState } from 'react';
import './FeaturedWork.css';

const FeaturedWork = ({ initialCategory = 'All', showFilters = true }) => {
    const [filter, setFilter] = useState(initialCategory);

    const works = [
        { id: 1, category: 'School', src: 'https://placehold.co/600x800/1a1a1a/FFF?text=School+Yearbook', title: 'Yearbook 2024' },
        { id: 2, category: 'Enterprise', src: 'https://placehold.co/800x600/1a1a1a/FFF?text=Corp+Headshots', title: 'Executive Team' },
        { id: 3, category: 'Events', src: 'https://placehold.co/600x600/1a1a1a/FFF?text=Gala+Night', title: 'Annual Gala' },
        { id: 4, category: 'School', src: 'https://placehold.co/600x900/1a1a1a/FFF?text=Graduation', title: 'Graduation Cemony' },
        { id: 5, category: 'Composite', src: 'https://placehold.co/800x500/1a1a1a/FFF?text=Composite+Art', title: 'Fantasy Edit' },
        { id: 6, category: 'Events', src: 'https://placehold.co/600x800/1a1a1a/FFF?text=Concert', title: 'Rock Concert' },
    ];

    const filteredWorks = filter === 'All' ? works : works.filter(work => work.category === filter);

    return (
        <section className="featured-work">
            <div className="section-header">
                <h2>{showFilters ? 'Featured Work' : `${initialCategory} Gallery`}</h2>
                {showFilters && (
                    <div className="filters">
                        {['All', 'School', 'Enterprise', 'Events', 'Composite'].map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="gallery-masonry">
                {filteredWorks.map(work => (
                    <div key={work.id} className="gallery-item">
                        <img src={work.src} alt={work.title} loading="lazy" />
                        <div className="gallery-overlay">
                            <h3>{work.title}</h3>
                            <span>{work.category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedWork;
