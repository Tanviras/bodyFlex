import React from 'react';
import NavbarH from '../Navbar/NavbarH';
import './Header.css';
import HeaderMain from './HeaderMain';


const Header = () => {
    return (
        <div className='header-container'>
        <NavbarH></NavbarH>
        <HeaderMain></HeaderMain>
        </div>
        );
};

export default Header;