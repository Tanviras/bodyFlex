import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import TrainingPrograms from '../TrainingPrograms/TrainingPrograms';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
         <div> 
             <Header></Header>
             <Services></Services>

             <div id="aboutUs">
             <AboutUs></AboutUs>
             </div>

             <TrainingPrograms></TrainingPrograms>
             <WhyChooseUs></WhyChooseUs>

             <div id='footer'>
             <Footer></Footer>
             </div>
            
        </div>
       
    );
};

export default Home;