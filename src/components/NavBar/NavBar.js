import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                        <i className='fa-solid fa-address-book text-warning'/> Contacts <span className='text-warning'>Gabyzda</span></Link>
                </div>
            </nav>
        </>
    )
};

export default NavBar;