import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMemb from '../HeaderMemb/HeaderMemb';
import ProgressBar from '../ProgressBar/ProgressBar';

const GymMembership = () => {
    return (
        <div>
            {/* home */}
            <HeaderMemb></HeaderMemb>
            <ProgressBar></ProgressBar>
            <Footer></Footer>
        </div>
    );
};

export default GymMembership;