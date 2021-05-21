import React from 'react';
import './OurDoctor.css';
import doctorImage from '../../../images/doctor-appointment.png';
import OurDoctorInfo from '../OurDoctorInfo/OurDoctorInfo';
const doctorData = [
    {
        id : 1,
        image : doctorImage,
        name : 'Dr. Caudi',
        phone : '01585868854'
    },
    {
        id : 2,
        image : doctorImage,
        name : 'Dr. Caudi',
        phone : '01585868854'
    },
    {
        id : 3,
        image : doctorImage,
        name : 'Dr. Caudi',
        phone : '01585868854'
    }
]

const OurDoctor = () => {
    return (
        <section id="ourDoctor">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center services-header-text">
                        <h5>Our Doctor</h5>
                    </div>
                </div>
                <div className="row">
                    {
                        doctorData.map(doctor => <OurDoctorInfo key={doctor.id} doctorInfo={doctor}></OurDoctorInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurDoctor;