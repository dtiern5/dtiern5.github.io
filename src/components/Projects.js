import React from 'react';
import './styles/Projects.css';

function Projects() {
    return (
        <section className="projects">
            <div>
                <span className="section-span-projects"></span>
                <h2 className="section-header-projects section-header-right">Projects</h2>
            </div>
            <div className="projects-container">
                <div className="project-box">
                    <h2>Butterfly Identifier</h2>
                    <p>
                        Identifies the species of a photographed butterfly.
                        Written in Python using Tensorflow's DenseNet121 machine learning model.
                        Try it out <a className="heroku-link" href="https://butterfly-recog.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>!
                    </p>
                </div>
                <div className="project-box">
                    <h2>JavaFX Appointment Scheduler</h2>
                    <p>
                        Allows CRUD interaction for users, appointments, and clients with a MySQL database.
                        Automatic time-zone conversions and established EST business hours disallow scheduling conflicts.
                    </p>
                </div>
                <div className="project-box">
                    <h2>ToDo Application</h2>
                    <p>
                        Written with NodeJS, React, and connected to a Mongo database.
                        Users can have multiple ToDo lists with persistent data. Create your
                        own <a className="heroku-link" href="https://hippodo.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>!
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default Projects;