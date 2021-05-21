import React from 'react';
import './TestimonialInfo.css';

const TestimonialInfo = ({testInfo}) => {
    const {name,department,image,text} = testInfo;
    return (
        <div className="col-md-4">
            <div className="testInfo-text">
                <p className="text-secondary">{text}</p>
            </div>
            <div className="d-flex align-items-center">
                <div className="dp-user-image">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h4 style={{ textTransform:"capitalize" }}>{name}</h4>
                    <p style={{ textTransform:"capitalize" }} className="text-secondary">{department}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialInfo;