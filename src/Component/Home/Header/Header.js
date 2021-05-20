import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderContent from '../HeaderContent/HeaderContent';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavBar></NavBar>
            <HeaderContent></HeaderContent>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;