import React from 'react';
import NavbarH from '../../Home/Navbar/NavbarH';
import HeaderMainPricing from '../HeaderMainPricing/HeaderMainPricing';
import './HeaderPricing.css';

const HeaderPricing = () => {
    return (
        <div className='pricing-container'>
            {/* Header */}
            <NavbarH></NavbarH>
            <HeaderMainPricing></HeaderMainPricing>
        </div>
    );
};

export default HeaderPricing;