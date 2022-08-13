import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">Contact Gabyzda</Link>
                </div>
            </nav>
        </>
    )
};

export default NavBar;