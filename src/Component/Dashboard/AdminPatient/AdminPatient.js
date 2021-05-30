import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import PatientList from './PatientList';
import ClipLoader from "react-spinners/ClipLoader";


const AdminPatient = () => {
    const [patient,setPatient] = useState([])
    let [scaleLoader, setScaleLoader] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/appointment/list')
        .then(res => res.json())
        .then(data => setPatient(data))
    },[])

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
                                        {
                                            patient.length === 0 &&  <div className="sweet-loading" style={{position:"relative",left:"100%"}}>
                                                                        <ClipLoader loading={scaleLoader} size={100} />
                                                                    </div>
                                        }
                                        {
                                            patient.map((dataTest,index) => <PatientList key={dataTest._id} index={index + 1 } list={dataTest}></PatientList>)
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

export default AdminPatient;