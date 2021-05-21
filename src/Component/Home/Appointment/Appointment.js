import React from 'react';
import './Appointment.css';
import DoctorImage from '../../../images/doctor-appointment.png';

const Appointment = () => {
    return (
        <section id="appoinment">
            <div className="container">
                <div className="row">
                    <div className="doctor-image col-md-5 offset-md-1">
                        <img src={DoctorImage} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 align-self-center">
                        <div className="appointment-text-content">
                            <h5>Appointment</h5>
                            <h2>Make an appoinment <br /> Today</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, dolore quibusdam? Natus quisquam ipsam impedit, iure sequi aperiam quos explicabo.</p>
                            <button className="btn btn-primary btn-setColor">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;