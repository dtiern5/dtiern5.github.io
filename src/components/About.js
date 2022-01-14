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

                <p>I'm a Software Developer from Saint Paul, MN. I love building modern web applications that solve life's unique problems. I work primarily with Java, React, Node, Express, and MongoDB.</p>
                <p>I'm passionate about solving problems with software, and am currently looking for positions in Full-Stack Web Development. Feel free to contact me!</p>
            </div>
        </section>
    )
}

export default About

