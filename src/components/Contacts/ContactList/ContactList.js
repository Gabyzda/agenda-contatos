import React from 'react';
import { Link } from "react-router-dom";

const ContactList = () => {
    return (
        <>
            <section className='contact-search p-3'>
                <div className='container'>
                    <div className='grid'>
                        <div className="row">
                            <div className='col'>
                                <p className='h3'>Contacts Gabyzda
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

            <section className='contact-ist'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-11'>
                                            <ul className='list-group'>
                                                <li className='list-group-item list-group-item-action'>
                                                    Name : <span className='fw-bold'>Ankys Serrano</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Email : <span className='fw-bold'>serranoankys@gmail.com</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action'>
                                                    Mobile : <span className='fw-bold'>42999091697</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='col-1'>
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