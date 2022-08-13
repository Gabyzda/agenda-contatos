import React from 'react';
import {Link} from "react-router-dom";

const ContactList = () => {
    return (
        <>
            <section className='contact-search'>
                <div className='container'>
                    <div className='grid'>
                        <div className="row">
                            <div className='col'>
                                <p className='h3'>Contatos 
                                <Link to={'/contacts/add'} className='btn btn-success ms-2'><i className='fa fa-square-plus me-2'/>New</Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default ContactList;