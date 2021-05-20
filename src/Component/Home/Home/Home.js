import React from 'react';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
        </section>
    );
};

export default Home;