import React from 'react';

const Contact = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Contact Us</h1>
                <p>Ready to capture your next moment? Get in touch with us.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                <div className="contact-info">
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Studio Location</h3>
                        <p>123 Creative Avenue<br />Arts District, City, ST 12345</p>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Contact Info</h3>
                        <p>Email: info@sgsphotography.com</p>
                        <p>Phone: (555) 123-4567</p>
                    </div>
                    <div style={{ width: '100%', height: '300px', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#aaa' }}>Google Maps Integration</span>
                    </div>
                </div>

                <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}>Name</label>
                        <input type="text" style={{ width: '100%', padding: '1rem', background: 'var(--color-bg-secondary)', border: '1px solid #333', color: '#fff' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}>Email</label>
                        <input type="email" style={{ width: '100%', padding: '1rem', background: 'var(--color-bg-secondary)', border: '1px solid #333', color: '#fff' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}>Service</label>
                        <select style={{ width: '100%', padding: '1rem', background: 'var(--color-bg-secondary)', border: '1px solid #333', color: '#fff' }}>
                            <option>General Inquiry</option>
                            <option>School Photography</option>
                            <option>Enterprise</option>
                            <option>Events</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}>Message</label>
                        <textarea rows="5" style={{ width: '100%', padding: '1rem', background: 'var(--color-bg-secondary)', border: '1px solid #333', color: '#fff' }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ alignSelf: 'start', cursor: 'pointer' }}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
