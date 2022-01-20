import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './styles/Navbar.css';

import Scroll from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="navbar">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home
                    </Typography>

                    <Button className="nav-link" color="inherit" href="#about">About</Button>
                    <Button className="nav-link" color="inherit" href="#projects">Projects</Button>
                    <Button className="nav-link" color="inherit" href="#contact">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;
