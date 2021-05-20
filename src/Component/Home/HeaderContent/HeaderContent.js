import React from 'react';
import './HeaderContent.css';
import headerImage from '../../../images/headerImage.png'

const HeaderContent = () => {
    return (
        <main className="container-fluid">
            <div className="row headerContent d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>Your New Smile <br/> Starts Here</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates assumenda pariatur nemo aut vero perspiciatis!</p>
                    <button className="btn btn-primary btn-setColor">Get Appointment</button>
                </div>
                <div className="col-md-6">
                    <img src={headerImage} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default HeaderContent;