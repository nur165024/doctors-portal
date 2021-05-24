import React from 'react';
import SideBar from '../SideBar/SideBar';
import './AdminPrescription.css';

const AdminPrescription = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    
                    <div className="col-md-10">
                        <h2 className="brand-color my-3">Prescription</h2>                  
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <h2 className="brand-color">Prescriptions</h2>
                                <table class="table borderless">
                                    <thead>
                                        <tr className="text-secondary">
                                            <th scope="col">Sl No</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Prescription</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                             <td>30-03-2021</td>
                                            <td>Alam Khan</td>
                                            <td>+88015855658</td>
                                            <td><button className="btn btn-primary btn-setColor">View</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>30-03-2021</td>
                                            <td>Alam Khan</td>
                                            <td>+88017855658</td>
                                            <td><button className="btn btn-primary btn-setColor">View</button></td>
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

export default AdminPrescription;