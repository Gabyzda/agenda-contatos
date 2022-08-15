import React from 'react';
import { Link } from "react-router-dom";
// import { ContactService } from '../../../services/ContactService';

const ContactList = () => {

    return (
        <>
            <section className='contact-search p-3'>
                <div className='container'>
                    <div className='grid'>
                        <div className="row">
                            <div className='col'>
                                <p className='h3 fw-bold'>Contacts Gabyzda
                                    <Link to={'/contacts/add'} className='btn btn-success ms-2'><i className='fa fa-square-plus me-2' />New</Link>
                                </p>
                                <p className='fst-italic'>Bienvenidos a mi Agenda de Contactos para uso exclusivo en TOTI. Aquí encontramos la Turma 16, maravillosos, competentes y bondadosos compañeros, cabe destacar que nuestro Amado Coordinador José Augusto Dalmonte, quien nos acompaña y orienta capazmente se encuentra registrado también. Soy feliz de ser TOTER!!!</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className='row'>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type='text' className="form-control" placeholder="Search Contacts" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <input type='submit' className="btn btn-outline-dark" value="Search" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='contact-list'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center d-flex justify-content-around'>
                                        <div className='col-md-6 d-flex flex-row align-items-center'>
                                            <span className='fw-bold'>Nombre de contacto</span>
                                        </div>
                                        <div className='col-md-6 d-flex flex-row align-items-center'>
                                            <Link to={'/contacts/view/:contactId'} className='btn btn-warning ms-1'>
                                                <i className='fa fa-address-card' />
                                            </Link>
                                            <Link to={'/contacts/edit/:contactId'} className='btn btn-success ms-1'>
                                                <i className='fa fa-user-pen' />
                                            </Link>
                                            <button className='btn btn-danger ms-1'>
                                                <i className='fa fa-trash-can' />
                                            </button>
                                        </div>
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

export default ContactList;