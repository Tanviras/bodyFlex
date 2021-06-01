import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css';
import ClassListCard from "../../OurClasses/ClassListCard/ClassListCard";

const Services = () => {
    const servicesData = [
        {
            id: 'B00OSTKZWM',
            image: 'https://i.imgur.com/csXCYtd.png',
            bgimage: 'https://i.imgur.com/KlSvpbZ.jpg',
            title: 'PROGRESSION',
            description: "Lorem ipsum dolor sit amet, consectetur"
        }
        ,
        {
            id: 'B00OSTKZWS',
            image: 'https://i.imgur.com/5f2tcS7.png',
            bgimage: 'https://i.imgur.com/cLr4R5l.jpg',
            title: 'WORKOUT',
            description: "Lorem ipsum dolor sit amet, consectetur "
        }
        ,
        {
            id: 'B00OSTKZWN',
            image: 'https://i.imgur.com/t0ALKCY.png',
            bgimage: 'https://i.imgur.com/NVnxGVM.jpg',
            title: 'NUTRITION',
            description: "Lorem ipsum dolor sit amet, consectetur "
        }

    ]

    return (
        <div style={{ paddingLeft: 100, paddingRight: 100, marginBottom: 100 }}>


            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    servicesData.map(srvData =>
                        <ServicesCard key={srvData.id} srvData={srvData}>
                        </ServicesCard>
                    )
                }

            </div>
        </div>

    );
};

export default Services;