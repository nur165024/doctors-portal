import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BusinessInfoCard.css';

const BusinessInfoCard = ({businessInfodata}) => {
    console.log(businessInfodata);
    return (
        <div className="col-md-4">
            <div className={`d-flex justify-content-center align-items-center business--info info-${businessInfodata.color}`}>
                <div style={{width: '30%',textAlign:'center'}}>
                    <FontAwesomeIcon className='icon-bus-info' icon={businessInfodata.icon} />
                </div>
                <div>
                    <h5>{businessInfodata.name}</h5>
                    <p>{businessInfodata.details}</p>
                </div>
            </div>
        </div>
    );
};
export default BusinessInfoCard;            