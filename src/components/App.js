import './styles/App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Technologies from './Technologies';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Technologies />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;