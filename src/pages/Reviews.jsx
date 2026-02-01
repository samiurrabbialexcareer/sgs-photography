import React from 'react';

const Reviews = () => {
    const testimonials = [
        { id: 1, name: "Sarah Johnson", role: "Principal, Oakwood High", text: "SGS transformed our yearbook process. The photos were stunning and the team was incredibly professional with the students." },
        { id: 2, name: "Michael Chen", role: "CEO, TechFlow", text: "The corporate headshots elevated our brand immediately. Highly recommended for any enterprise looking for a premium look." },
        { id: 3, name: "Emily Davis", role: "Parent", text: "The graduation photos captured my son's smile perfectly. I will treasure these prints forever." },
        { id: 4, name: "David Wilson", role: "Event Coordinator", text: "They captured exactly the vibe of our gala. The candid shots were just as beautiful as the posed ones." },
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Client Reviews</h1>
                <p>Hear from the people we have had the privilege to work with.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {testimonials.map(t => (
                    <div key={t.id} style={{
                        background: 'var(--color-bg-secondary)',
                        padding: '2rem',
                        border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ color: 'var(--color-accent)', fontSize: '2rem', marginBottom: '1rem' }}>"</div>
                        <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>{t.text}</p>
                        <div>
                            <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '0.2rem' }}>{t.name}</h4>
                            <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
