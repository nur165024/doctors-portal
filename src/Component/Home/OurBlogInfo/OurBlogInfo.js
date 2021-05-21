import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OurBlogInfo.css';

const OurBlogInfo = ({blogInfo}) => {
    const {image,name,date,title,details} = blogInfo;

    return (
        <div className="col-md-4">
            <div className="blog-body">
                <a href="javascript:void(0)">
                    <div className="d-flex align-items-center">
                        <div className="blog-image">
                            <img src={image} alt="" className="img-fluid" />
                        </div>
                        <div className="blog-title">
                            <h4>{name}</h4>
                            <p className="text-secondary">{date}</p>
                        </div>
                    </div>
                    <h5>{title}</h5>
                    <p className="blog-text text-secondary">{details}</p>
                    <p className="blog-font-awesome">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </p>
                </a>
            </div>
        </div>
    );
};

export default OurBlogInfo;