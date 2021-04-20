import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/books">Books</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/login">Login</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/signup">Signup</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/video">Video</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/projects">Projects</NavLink>
        </div>
    )
}

export default NavBar;
