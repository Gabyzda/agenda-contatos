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
                                <p className='h3'>Agenda de Contatos
                                <Link to={'/contacts/add'}></Link>
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