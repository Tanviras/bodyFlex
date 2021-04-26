import React from 'react';
import NavbarH from '../../Home/Navbar/NavbarH';
import HeaderMainClass from '../HeaderMainClass/HeaderMainClass';
import './HeaderClass.css';

const HeaderClass = () => {
    return (
        <div className='ourClasses-container'>
           <NavbarH></NavbarH>
           <HeaderMainClass></HeaderMainClass>
        </div>
    );
};

export default HeaderClass;