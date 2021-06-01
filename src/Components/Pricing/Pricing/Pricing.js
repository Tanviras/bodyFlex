import React from 'react';
import HeaderPricing from '../HeaderPricing/HeaderPricing';
import PricingList from '../PricingList/PricingList';
import Footer from '../../Shared/Footer/Footer';

const Pricing = () => {
    return (
        <div>
            <HeaderPricing></HeaderPricing>
            <PricingList></PricingList>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;