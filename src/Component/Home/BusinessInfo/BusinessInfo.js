import React from 'react';
import './BusinessInfo.css';
import { faClock, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import BusinessInfoCard from '../BusinessInfoCard/BusinessInfoCard';

const Businessdata = [
    {
        id : 1,
        icon : faClock,
        name : 'Opening Hours',
        details : 'Lorem ipsum dolor sit amet consectetur.',
        color : 'info'
    },
    {
        id : 2,
        icon : faMapMarkedAlt,
        name : 'Visit our location',
        details : 'Brooklyn,NY 10036, United States',
        color : 'dark'
    },
    {
        id : 3,
        icon : faPhoneAlt,
        name : 'Contact us now',
        details : '+0024547855',
        color : 'info'
    }
]

const BusinessInfo = () => {
    
    return (
        <div className="container">
            <div className="row">
                {
                    Businessdata.map(data => <BusinessInfoCard key={data.id} businessInfodata={data}></BusinessInfoCard>)
                }
            </div>
        </div>
    );
};

export default BusinessInfo;