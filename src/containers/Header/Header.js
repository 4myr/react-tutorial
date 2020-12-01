import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
const header = () => (
    <nav className="Header">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </nav>
);

export default header;