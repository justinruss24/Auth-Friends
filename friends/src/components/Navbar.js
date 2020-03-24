import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <h1>Login</h1>
            </Link>
        </nav>
    )
}

export default Navbar;