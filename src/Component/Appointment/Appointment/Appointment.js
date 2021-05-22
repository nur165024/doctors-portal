import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderAppointment from '../HeaderAppointment/HeaderAppointment';
import TimeAppointment from '../TimeAppointment/TimeAppointment';

const Appointment = () => {
    const [newDate,setNewDate] = useState(new Date());
    
    return (
        <>
            <HeaderAppointment setNewDate={setNewDate}></HeaderAppointment>
            <TimeAppointment newDate={newDate}></TimeAppointment>
            <Footer></Footer>
        </>
    );
};

export default Appointment;