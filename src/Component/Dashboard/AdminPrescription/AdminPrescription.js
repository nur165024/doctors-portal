import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './AdminPrescription.css';
import PrescriptionList from './PrescriptionList';

const AdminPrescription = () => {
    const [prescription,setPrescription] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/appointment/list')
        .then(res => res.json())
        .then(data => setPrescription(data))
    },[])

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
                                        {
                                            prescription.map((dataTest,index) => <PrescriptionList key={dataTest._id} index={index + 1 } list={dataTest}></PrescriptionList>)
                                        }
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