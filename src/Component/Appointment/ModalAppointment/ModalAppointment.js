import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const ModalAppointment = ({modalIsOpen,closeModal}) => {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >

                <div class="m">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button onClick={closeModal} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary btn-setColor">Save changes</button>
                        <button type="button" class="btn btn-secondary" onClick={closeModal} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ModalAppointment;