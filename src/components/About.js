import React, { useRef } from 'react';
import './styles/About.css';

function About() {

    return (
        <section className="home-about" id="about">
            <div className="home-about-text">
                <span className="section-span-about"></span>
                <h2 className="section-header-about">About Me</h2>
                <p>I'm a Full-Stack Web Developer from Saint Paul, MN. I love building modern web applications that make people's lives easier. I work primarily with Java, React, Node, Express, and MongoDB.</p>
                <br />
                <p>I'm passionate about solving problems with software, and am currently looking for positions in Full-Stack Web Development. Please don't hesitate to contact me!</p>
            </div>
        </section>
    )
}

export default About

