import React from 'react';
import {Link} from 'react-router-dom';

const EditContact = () => {
    return (
        <>
            <section className='add-contact p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h4 text-success fw-bold'>Edit Contact</p>
                            <p className='fst-italic'>Podremos modificar contactos de TOTI conforme vaya cambiando la situación de los miembros de nuestro Equipo. Bienvenidos los cambios en mi Agenda de Contactos, Éxito TOTER!!!</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <form>
                                <div className='mb-2'>
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className='mb-2'>
                                    <input type="email" className='form-control' placeholder='Email' />
                                </div>
                                <div className='mb-2'>
                                    <input type="number" className='form-control' placeholder='Mobile' />
                                </div>
                                <div className='mb-2'>
                                    <input type='submit' className='btn btn-success' value='Update'/>
                                    <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default EditContact;