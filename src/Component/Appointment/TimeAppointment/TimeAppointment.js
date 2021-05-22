import React from 'react';
import TimeAppointmentInfo from '../TimeAppointmentInfo/TimeAppointmentInfo';
import './TimeAppointment.css';

const timeAppointMentData = [
    {
        id : 1,
        name: 'Teeth Orthodotics',
        date : '8:00 AM - 9:00 AM',
        spaces : '10 Spaces Available'
    },
    {
        id : 2,
        name: 'Cosmetic Dentistry',
        date : '10:05 AM - 11:30 AM',
        spaces : '10 Spaces Available'
    },
    {
        id : 3,
        name: 'Teeth Cleaning',
        date : '5:00 PM - 6:30 PM',
        spaces : '10 Spaces Available'
    },
    {
        id : 4,
        name: 'Cavity Protection',
        date : '7:00 AM - 8:30 AM',
        spaces : '10 Spaces Available'
    },
    {
        id: 5,
        name: 'Teeth Orthodotics',
        date : '9:00 AM - 10:30 AM',
        spaces : '10 Spaces Available'
    },
    {
        id : 6,
        name: 'Teeth Orthodotics',
        date : '8:00 AM - 9:30 AM',
        spaces : '10 Spaces Available'
    },
]

const TimeAppointment = ({newDate}) => {
    return (
        <section id="timeAppointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center timeAppointment-color">
                        <h2>Available Appointment on {newDate.toDateString()}</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        timeAppointMentData.map(timeData => <TimeAppointmentInfo key={timeData.id} timeData={timeData} ></TimeAppointmentInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TimeAppointment;