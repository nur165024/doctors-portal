import React from 'react';
import Appointment from '../Appointment/Appointment';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Header from '../Header/Header';
import OurBlog from '../OurBlog/OurBlog';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <OurBlog></OurBlog>
        </section>
    );
};

export default Home;