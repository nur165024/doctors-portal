import React from 'react';
import './ServicesInfo.css';

const ServicesInfo = ({serviceData}) => {
    console.log(serviceData);
    return (
        <div className="col-md-4">
            <div className="service-info">
                <img src={serviceData.image} alt="" />
                <h4>{serviceData.name}</h4>
                <p>{serviceData.details}</p>
            </div>
        </div>
    );
};

export default ServicesInfo;