import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            "name": name,
            "email": email,
            "mobile": mobile,
        }
        console.log("data", data);
        const response = await fetch('http://localhost:4000/contatos/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        if (response.ok)
            console.log("OKS", response.ok);
        else
            console.log("ERRO");
    }
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
                            
                            <form onSubmit={handleSubmit} >
                                <div className='mb-2'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='mb-2'>
                                    <input
                                        type="email"
                                        className='form-control'
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='mb-2'>
                                    <input
                                        type="number"
                                        className='form-control'
                                        placeholder='Mobile'
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </div>
                                <div className='mb-2'>
                                    <input type='submit' className='btn btn-success' value='Create' />
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

export default AddContact;