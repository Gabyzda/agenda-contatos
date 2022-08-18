import React from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import { useState, useEffect } from "react";
// import { ContactService } from '../../../services/ContactService';

const ContactList = () => {
    const [listContact, setListContact] = useState([]);

    function getAllContacts() {
        fetch('http://localhost:4000/contatos')
            .then((response) => response.json())
            .then(data => setListContact(data));
    };

    useEffect(() => {
        getAllContacts();
    }, []);

    console.log("LISTA DE CONTACTOS", listContact);

    const handDelete = async (contactId) => {
        const response = await fetch('http://localhost:4000/contatos/' + contactId, {
            method: 'DELETE',
        })
        if (response.ok) {
            alert("successfully deleted");
            getAllContacts ();
        }
    }

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
                        <div className='col-md-4 my-1'>
                            {listContact?.map((contact) => {
                                return (
                                    <div key={contact.id} className='card my-1'>
                                        <div className='card-body'>
                                            <div className='row align-items-center d-flex-row justify-content-around'>
                                                <div className='col-md-6 d-flex flex-row align-items-center'>
                                                    <span className='fw-bold'>
                                                        {contact.name}
                                                    </span>
                                                </div>
                                                <div className='col-md-6 d-flex flex-row align-items-center'>
                                                    <Link to={'/contacts/view/:contactId'} className='btn btn-warning ms-1'>
                                                        <i className='fa fa-address-card' />
                                                    </Link>
                                                    <Link to={'/contacts/edit/:contactId'} className='btn btn-success ms-1'>
                                                        <i className='fa fa-user-pen' />
                                                    </Link>
                                                    <button onClick={() => handDelete(contact.id)} className='btn btn-danger ms-1'>
                                                        <i className='fa fa-trash-can' />
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ContactList;