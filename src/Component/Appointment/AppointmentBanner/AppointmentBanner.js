import React from 'react';
import headerImage from '../../../images/headerImage.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentBanner = ({setNewDate}) => {
    return (
        <main className="container-fluid">
            <div className="row headerContent d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>Appointment</h1>
                    <Calendar
                        onChange={setNewDate}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <img src={headerImage} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default AppointmentBanner;