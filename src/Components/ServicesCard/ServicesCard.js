import React from 'react';
import './ServicesCard.css';

const ServicesCard = (props) => {
    const { image,bgimage, title, description, id } = props.srvData;

    return (
        <div style={{  paddingRight:35,paddingLeft:35 }}
             className="col-md-4 mx-auto"
        >

              

<div className="row card text-center service-card"  
>


<div class="card-body cardContents" style={{backgroundImage: `url(${bgimage})`,backgroundSize: "100% 100%",backgroundPosition:'center'}}>
    <img src={image} alt='kire image ashe na kn' className='serviceImage'/>
    <h5 class="card-title text-white">{title}</h5>
    <p class="card-text text-white">{description}</p>
</div> 



</div>


        </div>
    );
};

export default ServicesCard;