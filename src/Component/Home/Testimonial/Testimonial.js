import React from 'react';
import './Testimonial.css';
import nureAlam from '../../../images/hello.png';
import hi from '../../../images/hi.png';
import china from '../../../images/china.png';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';

const testimonialData = [
    {
        id : 1,
        text : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et aspernatur recusandae ad? Rem unde eos quae eum perferendis similique pariatur, laboriosam itaque atque ea tempora consequuntur accusamus asperiores.',
        image : nureAlam,
        name: 'nure alam',
        department : 'full stack developer'
    },
    {
        id : 2,
        text : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et aspernatur recusandae ad? Rem unde eos quae eum perferendis similique pariatur, laboriosam itaque atque ea tempora consequuntur accusamus asperiores.',
        image : hi,
        name: 'Hi',
        department : 'web developer'
    },
    {
        id : 3,
        text : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et aspernatur recusandae ad? Rem unde eos quae eum perferendis similique pariatur, laboriosam itaque atque ea tempora consequuntur accusamus asperiores.',
        image : china,
        name: 'China',
        department : 'IOS developer'
    },
]

const Testimonial = () => {
    console.log(testimonialData);
    return (
        <section id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 services-header-text">
                        <h5>Testimnital</h5>
                        <h2>What's Our Patients <br/> Says</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        testimonialData.map(data => <TestimonialInfo key={data.id} testInfo={data}></TestimonialInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;