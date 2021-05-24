import React from 'react';
import SideBar from '../SideBar/SideBar';

const AdminPatient = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <SideBar></SideBar>
                    
                    <div className="col-md-10">
                        <h2 className="brand-color my-3">Patient</h2>                  
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <h2 className="brand-color">Patients</h2>
                                <table class="table borderless">
                                    <thead>
                                        <tr className="text-secondary">
                                            <th scope="col">Sl No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Weight</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Alam Khan</td>
                                            <td>Male</td>
                                            <td>30</td>
                                            <td>60 kg</td>
                                            <td>+88015855658</td>
                                            <td>Panthopath, Green Road, Dhaka-1205.</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Alam Khan</td>
                                            <td>Female</td>
                                            <td>25</td>
                                            <td>60 kg</td>
                                            <td>+88017855658</td>
                                            <td>Panthopath, Green Road, Dhaka-1205.</td>
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

export default AdminPatient;