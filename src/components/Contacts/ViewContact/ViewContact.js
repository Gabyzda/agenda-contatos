import React from 'react';
import { Link } from 'react-router-dom';

const ViewContact = () => {
    return (
        <>
            <div className='col-md-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center d-flex justify-content-around'>
                                        <div className='col-md-10 d-flex flex-row'>
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
                                            <Link to={'/contacts/edit/:contactId'} className='btn btn-success my-1'>
                                                <i className='fa fa-user-pen'/>
                                            </Link>
                                            <button className='btn btn-danger my-1'>
                                                <i className='fa fa-trash-can'/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
};

export default ViewContact;