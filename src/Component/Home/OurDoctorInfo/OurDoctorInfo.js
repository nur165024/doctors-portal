import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OurDoctorInfo.css';

const OurDoctorInfo = ({doctorInfo}) => {
    const {image,name,phone} = doctorInfo;
    return (
        <div className="col-md-4">
            <div className="doctorInfo">
                <img src={image} alt="" className="img-fluid" />
                <h5>{name}</h5>
                <p>
                    <FontAwesomeIcon className="font-icon-doctor" icon={faPhoneAlt} />
                    <span>{phone}</span>
                </p>
            </div>
        </div>
    );
}; 

export default OurDoctorInfo;