import React from 'react';
import {Link} from "react-router-dom";

const ContactList = () => {
    return (
        <>
            <section className='contact-search p-3'>
                <div className='container'>
                    <div className='grid'>
                        <div className="row">
                            <div className='col'>
                                <p className='h3'>Contacts Gabyzda 
                                <Link to={'/contacts/add'} className='btn btn-success ms-2'><i className='fa fa-square-plus me-2'/>New</Link>
                                </p>
                                <p>Bienvenidos a mi Agenda de Contactos para uso exclusivo en TOTI. Aquí encontramos la Turma 16, maravillosos, competentes y bondadosos compañeros, cabe destacar que nuestro Amado Coordinador quien nos acompaña y orienta capazmente se encuentra registrado también. Soy feliz de ser TOTER!!!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default ContactList;