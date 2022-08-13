import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                        <i className='fa-solid fa-address-book'/> Contacts Gabyzda</Link>
                </div>
            </nav>
        </>
    )
};

export default NavBar;