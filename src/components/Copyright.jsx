// src/components/Copyright.jsx
import React from 'react';
import './Copyright.scss'; // Import styles for this component

const Copyright = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="copyright">
            <p>&copy; {currentYear} GUNNU CHANDRA. All rights reserved.</p>
        </footer>
    );
};

export default Copyright;