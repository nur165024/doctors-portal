import React, { useState } from 'react';
import ModalAppointment from '../ModalAppointment/ModalAppointment';
import './TimeAppointmentInfo.css';

const TimeAppointmentInfo = ({timeData}) => {
    const {name,date,spaces} = timeData;

    const [modalIsOpen,setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div className="col-md-4">
            <div className="timeAppointmentContent">
                <h3>{name}</h3>
                <h5>{date}</h5>
                <p className="text-secondary">{spaces}</p>
                <button onClick={openModal} className="btn btn-primary btn-setColor">Book Appointment</button>
                <ModalAppointment closeModal={closeModal} modalIsOpen={modalIsOpen}></ModalAppointment>
            </div>
        </div>
    );
};

export default TimeAppointmentInfo;