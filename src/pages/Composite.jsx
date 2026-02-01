import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Composite = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Composite Photography</h1>
                <p>The art of blending reality with imagination. Slide to see the transformation.</p>
            </div>

            <div className="composite-demo" style={{ margin: '3rem 0' }}>
                <BeforeAfterSlider
                    beforeSrc="https://placehold.co/900x500/333/FFF?text=Original+Raw+Image"
                    afterSrc="https://placehold.co/900x500/1a1a1a/d4af37?text=Final+Composite+Masterpiece"
                    alt="Fantasy landscape"
                />
            </div>

            <div className="composite-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <p>Our editing process involves meticulous attention to detail, color grading, and element integration to create surreal and impactful imagery.</p>
            </div>
        </div>
    );
};

export default Composite;
