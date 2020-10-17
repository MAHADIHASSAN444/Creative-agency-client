import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import LogoInfo from '../LogoInfo/LogoInfo';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-Container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <LogoInfo></LogoInfo>
        </div>
    );
};

export default Header;