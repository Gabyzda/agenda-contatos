import React from "react";

const Modal = ({ handCancel, handDelete }) => {
    return (
        // <div className=''>
        //                     <h3>Are you sure you want to delete?</h3>
        //                     <button onClick={handDelete}>Confirm</button>
        //                     <button onClick={handCancel}>Cancel</button>
        //                 </div>

        <div className="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">Alert</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h3>Are you sure you want to delete?</h3>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handCancel}type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button onClick={handDelete}type="button" className="btn btn-success">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;