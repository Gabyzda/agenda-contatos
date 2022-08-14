import React from 'react';
import { Link } from 'react-router-dom';

const ViewContact = () => {
    return (
        <>
            <section className='add-contact p-3'>
                <div className='container'>
                    <div className='col'>
                        <p className='h4 text-success fw-bold'>View Contact</p>
                        <p className='fst-italic'>Podremos ver nuestros contactos de TOTI aquí, Así es el detalle de mi Agenda de Contactos TOTER!!!</p>
                    </div>
                    <div className='col-md-4' >
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row align-items-center d-flex justify-content-around'>
                                    <div className='col-md-10 d-flex flex-row align-items-center'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                Name: <span className='fw-bold'>Ankys Serrano</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action d-flex flex-row'>
                                                Email: <span className='fw-bold'> serranoankys@gmail.com</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                Mobile: <span className='fw-bold'>42999091697</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-2 d-flex flex-column align-items-center'>
                                        <Link to={'/contacts/list'} className='btn btn-dark'>
                                            Back
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ViewContact;