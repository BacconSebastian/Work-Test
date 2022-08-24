import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to="/"><Button size="lg">Table</Button></Link>
            <Link to="/form"><Button size="lg">Form</Button></Link>
        </Navbar>
    );
}

export default Nav;