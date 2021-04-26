import React from 'react';
import NavbarH from '../../Home/Navbar/NavbarH';
import HeaderMainMemb from '../HeaderMainMemb/HeaderMainMemb';
import './HeaderMemb.css';

const HeaderMemb = () => {
    return (
        <div className='member-container'>
            {/* header */}
            <NavbarH></NavbarH>
            <HeaderMainMemb></HeaderMainMemb>
        </div>
    );
};

export default HeaderMemb;