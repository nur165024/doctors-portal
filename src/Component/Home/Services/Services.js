import React from 'react';
import './Services.css'
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Teath from '../../../images/teath.png';
import ServicesInfo from '../ServicesInfo/ServicesInfo';

const serviceData = [
    {
        id: 1,
        image : Fluoride,
        name : 'Fluoride Treatment',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo obcaecati sit saepe error fuga repudiandae sunt commodi neque veniam.'
    },
    {
        id: 2,
        image : Cavity,
        name : 'Cavity Filling',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo obcaecati sit saepe error fuga repudiandae sunt commodi neque veniam.'
    },
    {
        id: 3,
        image : Teath,
        name : 'Teath Whitening',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo obcaecati sit saepe error fuga repudiandae sunt commodi neque veniam.'
    }
]

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center services-header-text">
                        <h5>Our Services</h5>
                        <h2>Services we Provide</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        serviceData.map(data => <ServicesInfo key={data.id} serviceData={data}></ServicesInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;