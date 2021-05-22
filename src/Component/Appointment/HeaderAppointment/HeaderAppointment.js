import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const HeaderAppointment = ({setNewDate}) => {
    return (
        <div id="headerAppointment">
            <NavBar></NavBar>
            <AppointmentBanner setNewDate={setNewDate}></AppointmentBanner>
        </div>
    );
};

export default HeaderAppointment;