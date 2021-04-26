import React from 'react';
import HeaderClass from '../HeaderClass/HeaderClass';
import './OurClasses.css';
import ClassList from "./../ClassList/ClassList";
import Footer from "./../../Shared/Footer/Footer";

const OurClasses = () => {
    return (
        <div>
         <HeaderClass></HeaderClass>
         <ClassList></ClassList>
         <Footer></Footer>
        </div>
    );
};

export default OurClasses;