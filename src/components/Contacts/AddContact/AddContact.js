import React from 'react';

const AddContact = () => {
    return (
        <>
            <section className='add-contact p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h4 text-success fw-bold'>Create Contact</p>
                            <p className='fst-italic'>Podremos adicionar más contactos de TOTI conforme vayamos conociendo nuestro Equipo. Serán Bienvenidos a mi Agenda de Contactos, un placer TOTER!!!</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <form>
                                <div className='mb-2'>
                                    <input type="text" className='form-control' placeholder='Name'/>
                                </div>
                                <div className='mb-2'>
                                    <input type="email" className='form-control' placeholder='Email'/>
                                </div>
                                <div className='mb-2'>
                                    <input type="number" className='form-control' placeholder='Mobile'/>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>

            </section>
        </>
    )
};

export default AddContact;