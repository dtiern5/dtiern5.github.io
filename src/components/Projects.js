import { useState } from 'react';
import ReactPlayer from 'react-player';
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
                    <ReactPlayer controls="true" className="example-video" width="640px" url="https://youtu.be/7JfEymRDVqU" />
                    <div className="project-text">
                        <h2>Recipe Share</h2>
                        <p>
                            Users can add, edit, and delete recipes from their own recipe book,
                            as well as share them with other users. Has light and dark mode functionality.
                        </p>
                        <p>
                            Written with NodeJS, React, and connected to a Strapi backend.
                        </p>
                    </div>

                </div>
                <div className="project-box">

                    <ReactPlayer controls="true" className="example-video" width="640px" url="https://youtu.be/8ogSebUvwMA" />
                    <div className="project-text">
                        <h2>Butterfly Identifier</h2>
                        <p>
                            Identifies the species in a photograph of a butterfly.
                        </p>
                        <p>
                            Written in Python using Tensorflow's DenseNet121 machine learning model.
                        </p>
                    </div>

                </div>
                <div className="project-box">
                    <ReactPlayer controls="true" className="example-video" width="640px" url="https://youtu.be/tb4hLt7_SIo" />
                    <div className="project-text">
                        <h2>JavaFX Appointment Scheduler</h2>
                        <p>
                            Allows CRUD interaction for users, appointments, and clients with a MySQL database.
                            Automatic time-zone conversions and established EST business hours disallow scheduling conflicts.
                        </p>
                        <p>
                            MVC (Model - View - Controller) design pattern used, as well as comprehensive JavaDoc documentation.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Projects;