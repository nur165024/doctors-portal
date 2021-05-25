import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

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

const ModalAppointment = ({modalIsOpen,closeModal,title,newDate}) => {
    console.log(newDate);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service= title;
        data.date = newDate;
        data.created_at = new Date();

        fetch('http://localhost:5000/appointment/store',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                closeModal()
                alert('Appointment Created Successfully!');
            }
        })
        
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >

                <div className="">
                    <div className="modal-header">
                        <h5 style={{color : '#1CC7C1'}} className="modal-title">{title}</h5>
                        <p className="text-secondary">{new Date().toDateString(newDate)}</p>
                        <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-body">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" {...register('name',{required:true})} className="form-control" id="name" placeholder="Your Name" />
                                    <p className="text-danger">{errors.name && "Name is required"}</p>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" {...register('email',{required:true})} name="email" className="form-control" id="email" placeholder="Email" />
                                    <p className="text-danger">{errors.email && "Email is required"}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="tel" {...register('phoneNumber',{required:true})} name="phoneNumber" className="form-control" id="phoneNumber" placeholder="Phone Number" />
                                <p className="text-danger">{errors.phoneNumber && "Phone Number is required"}</p>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <select id="gender" {...register("gender")} name="gender" className="form-control">
                                        <option value=" " selected>Gender...</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <p className="text-danger">{errors.gender && "Gender is required"}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <input type="number" {...register('age',{required:true})} name="age" placeholder="Age" className="form-control" id="age" />
                                    <p className="text-danger">{errors.age && "Age is required"}</p>
                                </div>
                                <div className="form-group col-md-4">
                                    <input type="text" {...register('weight',{required:true})} name="weight" placeholder="Weight" className="form-control" id="weight" />
                                    <p className="text-danger">{errors.weight && "Weight is required"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary btn-setColor">Save changes</button>
                            <button type="button" className="btn btn-secondary" onClick={closeModal} data-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default ModalAppointment;