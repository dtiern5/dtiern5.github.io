import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './styles/Home.css';

const Home = () => {

    const [state] = useState({
        title: "Hi, my name is",
        titleTwo: "Danny Tierney"
    })

    return (
        <div className="home">
            <div className="home-intro">
                <h1>
                    <div className="title">{state.title}</div>
                    <div className="titleTwo">{state.titleTwo}</div>
                </h1>
                <div className="text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Software Developer')
                                .start();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;