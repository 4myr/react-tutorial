import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
const header = () => (
    <nav className="Header">
        <ul>
            <li>
                <NavLink to="/" exact activeStyle={{ color: 'red' }}> Home</NavLink>
            </li>
            <li>
                <NavLink to="/posts">Posts</NavLink>
            </li>
            <li>
                <NavLink to="/new-post">New Post</NavLink>
            </li>
        </ul>
    </nav>
);

export default header;