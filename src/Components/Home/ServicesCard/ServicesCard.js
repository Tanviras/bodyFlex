import React from 'react';
import './ServicesCard.css';

const ServicesCard = (props) => {
    const { image,bgimage, title, description, id } = props.srvData;

    return (
        <div className="col-md-4 serviceCard">
        <div className="serviceCardSize"
        style={{
            backgroundImage:`url(${bgimage})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 100%'}}
        >
              <img
                 style={{ width: 74,height:85 }}
                 className="mx-auto"
                 src={image}
                 alt=''
             />


               <div className=" card-body">
                    <h4 style={{ fontWeight: 800 }} className="card-title text-white">
                        {title}
                    </h4>
                    <p className="card-text text-white">{description}</p>
                </div>
            

 

        </div>
        </div>
    );
};

export default ServicesCard;