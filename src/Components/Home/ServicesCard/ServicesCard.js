import React from 'react';
import './ServicesCard.css';
import { Link } from "react-router-dom";

const ServicesCard = (props) => {
    const { image, bgimage, title, description, id } = props.srvData;

    return (
        <div class="col services__card">
            <div class="card h-100"
                style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                }}
            >

                <center>
                    <div className='services__context'>
                    <img
                        style={{ width: 74, height: 85 }}
                        className="mx-auto"
                        src={image}
                        alt=''
                    />

                    <h4 style={{ fontWeight: 800 }} className="card-title text-white">
                        {title}
                    </h4>
                    <p className="card-text text-white">{description}</p>
                    </div>
                </center>




            </div>
        </div>
    );
};

export default ServicesCard;