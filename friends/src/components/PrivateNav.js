import React from 'react';
import { Link } from 'react-router-dom';

const PrivateNav = () => {
    return (
        <nav>
            <Link to="/">
                <h1>Friends</h1>
            </Link>
            <div>
                <Link to="/">
                    <h2>Log Out</h2>
                </Link>
            </div>
        </nav>
    )
}

export default PrivateNav;