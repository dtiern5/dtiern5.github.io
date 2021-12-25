import './styles/App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Technologies from './Technologies';
import About from './About';
import NavbarNew from './NavbarNew';
import Contact from './Contact';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home id='home'/>
            <Technologies />
            <About />
            <Contact />
        </div>
    );
}

export default App;