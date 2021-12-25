import React from 'react'
import "./styles/Footer.css";

const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className="footer">
            <p>Danny Tierney © {currentYear}</p>
        </footer>
    )
}

export default Footer