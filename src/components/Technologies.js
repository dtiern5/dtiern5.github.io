import React from 'react';
import './styles/Technologies.css';
import mongoLogo from '../logos/mongo.svg';
import reactLogo from '../logos/react.svg';
import javaLogo from '../logos/java.svg';
import nodeLogo from '../logos/node.svg';
import pythonLogo from '../logos/python.svg';

function Technologies() {
    return (
        <section className="technologies">
            <div>
                <span className="section-span-technologies"></span>
                <h2 className="section-header-technologies section-header-right">Technologies</h2>
            </div>
            <div className="tech-container">
                <div className="tech">
                    <img src={nodeLogo}></img>
                </div>
                <div className="tech">
                    <img src={reactLogo}></img>
                </div>
                <div className="tech">
                    <img src={javaLogo}></img>
                </div>
                <div className="tech">
                    <img src={pythonLogo}></img>
                </div>
                <div className="tech">
                    <img src={mongoLogo}></img>
                </div>
                
            </div>
        </section>
    )
}

export default Technologies;