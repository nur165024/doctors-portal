import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const HeaderAppointment = () => {
    return (
        <div id="headerAppointment">
            <NavBar></NavBar>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default HeaderAppointment;