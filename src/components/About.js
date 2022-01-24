import React, { useRef } from 'react';
import './styles/About.css';

function About() {
    return (
        <section className="about" id="about">
            <div className="about-text">
                <span className="section-span-about section-header-right"></span>
                <div>
                    <h2 className="section-header-about ">About Me</h2>
                </div>

                <p>I'm a Software Developer that loves building modern web applications that solve life's unique problems. I have enjoyed building projects with Java and Python, and I've recently been working primarily with React and Node.js.</p>
                <p>I'm passionate, adaptable, and am always looking to develop new skills and take on new challenges. I place an emphasis on clean and efficient code. Feel free to <a className="contact-link" href="#contact">contact me</a>!</p>
            </div>
        </section>
    )
}

export default About

