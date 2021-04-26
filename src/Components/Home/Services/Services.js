import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css';

const Services = () => {
    const servicesData = [
        {
            id:'B00OSTKZWM',
            image:'https://i.imgur.com/csXCYtd.png',
            bgimage:'https://i.imgur.com/KlSvpbZ.jpg',
            title:'PROGRESSION',
            description: "Lorem ipsum dolor sit amet, consectetur"
        }
        ,
        {
            id:'B00OSTKZWS',
            image:'https://i.imgur.com/5f2tcS7.png',
            bgimage:'https://i.imgur.com/cLr4R5l.jpg' ,
            title:'WORKOUT',
            description: "Lorem ipsum dolor sit amet, consectetur "
        }
        , 
        {
            id:'B00OSTKZWN',
            image:'https://i.imgur.com/t0ALKCY.png',
            bgimage: 'https://i.imgur.com/NVnxGVM.jpg',
            title:'NUTRITION',
            description: "Lorem ipsum dolor sit amet, consectetur "
        }

    ]
    return (
        <div style={{paddingLeft:115,paddingRight:115,marginBottom:100}}>

            <div className="row text-center justify-content-around">
               {
                   servicesData.map(srvData=>
                   <ServicesCard key={srvData.id} srvData={srvData}>
                   </ServicesCard>
                   )
               }
            </div>
            
        </div>

    );
};

export default Services;