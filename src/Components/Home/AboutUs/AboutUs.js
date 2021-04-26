import React from 'react';
import './AboutUs.css';
import aboutUsPhoto from '../../../Image & Icon/aboutUsPhoto.jpg';

const AboutUs = () => {
    return (
        <div className="container-fluid">
            <div className='row aboutUs'>

                <div className="col-md-6 col-sm-6">
                    <img src={aboutUsPhoto} alt='' className='aboutUsPhotoSize' />
                </div>

                <div className="col-md-6 col-sm-6">
                    <h1 style={{ color: '#e6e6e6' }}>ABOUT US</h1>
                    <h2 style={{ color: '#eeae0c' }}>WE ARE HERE TO DREAM!</h2>
                    <br />
                    <h2>OUR TEAM IS HERE TO SERVE YOU</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt impedit sit. Quasi ea voluptates incidunt repudiandae nihil odio nesciunt soluta harum ratione fugit quam porro dolore, sit impedit saepe explicabo eum doloremque non perspiciatis?</p>
                </div>

            </div>
        </div>

    );
};

export default AboutUs;