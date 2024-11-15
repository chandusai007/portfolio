// src/components/Popup.jsx

import React from 'react';
import './popup.scss'; // Import styles for this component

const Popup = ({ title, description, onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;