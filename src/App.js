// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Copyright from './components/Copyright';

function App() {
    return (
        <>
            <Navbar />
            <div id="about">
                <About />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="projects">
                <Projects /> {/* Ensure this line is present */}
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Copyright />
        </>
    );
}

export default App;