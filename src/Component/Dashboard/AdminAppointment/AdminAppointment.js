import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideBar from '../SideBar/SideBar';
import './AdminAppointment.css';
import AdminAppointmentList from './AdminAppointmentList';

const AdminAppointment = () => {
    const [date,setDate] = useState(new Date());
    const [adminAppointment,setAdminAppointment] = useState([]);
    
    const handleDate = (date) => {
        setDate(date)
        fetch('http://localhost:5000/appointmentByDate',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res => res.json())
        .then(data => setAdminAppointment(data))
    }

    let listAppointment;
    if (adminAppointment.length !== 0) {
        listAppointment = adminAppointment.map((appointment,index) => <AdminAppointmentList index={index + 1} key={appointment._id} appointment={appointment}></AdminAppointmentList>)
    }else{
        listAppointment = <tr><td className="text-center" colSpan="5">There no Result</td></tr>
    }

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    
                    <div className="col-md-10">
                        <h2 className="brand-color my-3">Appointments</h2>
                        <div className="row mt-5">
                            <div className="col-md-3">
                                <Calendar 
                                    onChange={handleDate}
                                    value={new Date()}
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="d-flex mb-4">
                                    <h4 className="brand-color">Appointments</h4>
                                    <p className="text-secondary appointment-date">{date.toDateString()}</p>
                                </div>
                                <table class="table borderless">
                                    <thead>
                                        <tr className="text-secondary">
                                            <th scope="col">Sl No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Schedule</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listAppointment}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminAppointment;