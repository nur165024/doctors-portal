import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SideBar from '../SideBar/SideBar';
import './AdminAppointment.css';

const AdminAppointment = () => {
    const [date,setDate] = useState(new Date());

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
                                    onChange={setDate}
                                    value={date}
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
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Alam Khan</td>
                                            <td>3.00 PM</td>
                                            <td><button className="btn btn-primary btn-setColor">Not Visited</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Karim Khan</td>
                                            <td>4.00 PM</td>
                                            <td><button className="btn btn-primary btn-setColor">Visited</button></td>
                                        </tr>
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