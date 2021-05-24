import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    
                    <div className="col-md-10">
                        <h2 className="mb-4">Dashboard</h2>
                        <div className="row">
                            <div className="col-md-3">
                                <div class="bg-danger d-flex text-white p-3 align-items-center justify-content-center text-center">
                                    <h3 className="mr-3">09</h3>
                                    <p className="mt-0">Pending Appointment</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="bg-primary d-flex text-white p-3 align-items-center justify-content-center text-center">
                                    <h3 className="mr-3">19</h3>
                                    <p className="mt-0">Today's Appointment</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="bg-success d-flex text-white p-3 align-items-center justify-content-center text-center">
                                    <h3 className="mr-3">34</h3>
                                    <p className="mt-0">Total Appointment</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="bg-warning d-flex text-white p-3 align-items-center justify-content-center text-center">
                                    <h3 className="mr-3">78</h3>
                                    <p className="mt-0">Total Patients</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <h2 className="brand-color">Recent Appointment</h2>
                                <table class="table borderless">
                                    <thead>
                                        <tr className="text-secondary">
                                            <th scope="col">Sl No</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Prescription</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>27-02-2021</td>
                                            <td>3.00 PM</td>
                                            <td>Alam Khan</td>
                                            <td>+88015855658</td>
                                            <td><button className="btn btn-primary btn-setColor">View</button></td>
                                            <td><button className="btn btn-primary btn-setColor">Pending</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>30-03-2021</td>
                                            <td>4.00 PM</td>
                                            <td>Karim Khan</td>
                                            <td>+88017855658</td>
                                            <td><button className="btn btn-light">Not Added</button></td>
                                            <td><button className="btn btn-danger">Cancelled</button></td>
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

export default Dashboard;