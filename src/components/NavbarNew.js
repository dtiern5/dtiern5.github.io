import React from 'react';
import './styles/NavbarNew.css';
import { links } from './data.js';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div>
                    {links.map((link) => {
                        return <a className='nav-link' href={link.url} key={link.id}>
                            {link.text}
                        </a>
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
