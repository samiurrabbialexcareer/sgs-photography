import React, { useState } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeSrc, afterSrc, alt }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };

    return (
        <div className="before-after-container">
            <div className="image-wrapper before">
                <img src={beforeSrc} alt={`Before ${alt}`} />
                <span className="label">Before</span>
            </div>
            <div
                className="image-wrapper after"
                style={{ width: `${sliderPosition}%` }}
            >
                <img src={afterSrc} alt={`After ${alt}`} />
                <span className="label">After</span>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="slider-range"
            />
            <div
                className="slider-handle"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="handle-line"></div>
                <div className="handle-circle">
                    <span>&lt;&gt;</span>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
