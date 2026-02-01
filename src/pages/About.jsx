import React from 'react';

const About = () => {
    return (
        <div className="page-container">
            <div className="page-header" style={{ marginBottom: '4rem' }}>
                <h1>About SGS Photography</h1>
                <p>A collective of visual storytellers dedicated to capturing the authentic spirit of every subject.</p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Our Vision</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                        We believe that photography is not just about recording an image; it is about preserving a feeling. Our mission is to create visual legacies for schools, businesses, and families that transcend time.
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        In a world of fleeting digital moments, we strive to create lasting physical and digital art that honors the importance of the occasion.
                    </p>
                </section>

                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Our People</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ width: '100%', height: '300px', background: '#1a1a1a', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ opacity: 0.3 }}>Team Member {i}</span>
                                </div>
                                <h3 style={{ marginBottom: '0.5rem' }}>Photographer Name</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>Lead Photographer</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>Our Product</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                        We use top-tier equipment including RED Digital Cinema cameras and prime lenses to ensure cinematic quality. Our prints are sourced from archival-grade labs to guarantee longevity.
                    </p>
                    <div style={{ width: '100%', height: '400px', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ opacity: 0.3 }}>Gear Shot / Print Showcase</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
