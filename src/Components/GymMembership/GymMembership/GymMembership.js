import React from 'react';
import { useHistory, useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import HeaderMemb from '../HeaderMemb/HeaderMemb';
import HomeGym from '../HomeGym/HomeGym';
import MultiStepForm from '../MultiStepForm/MultiStepForm';
import ProgressBar from '../ProgressBar/ProgressBar';

const GymMembership = () => {
    let { classId } = useParams();
    const history = useHistory();
 console.log(classId);
 
    const prices=[
        {
         id:1,
         title:'ADVANCED PLAN',
         value:'$140',
         bgImage:'https://i.imgur.com/KlSvpbZ.jpg'
        },
        {
        id:2,
        title:'BASIC PLAN',
        value:'$120',
        bgImage:'https://i.imgur.com/cLr4R5l.jpg'
        },
        {
        id:3,
        title:'BEGINNERS',
        value:'$90',
        bgImage:'https://i.imgur.com/NVnxGVM.jpg'
        }
]

// function selectedClass(gymClass) {
//     return gymClass.id === {classId};
//   }

//   prices.find(selectedClass);
    

    return (
        <div>
            <HeaderMemb></HeaderMemb>
            <MultiStepForm></MultiStepForm>
            <Footer></Footer>
        </div>
    );
};

export default GymMembership;