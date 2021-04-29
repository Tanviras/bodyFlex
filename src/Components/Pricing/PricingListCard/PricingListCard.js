import React from 'react';
import './PricingListCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const PricingListCard = (props) => {
    const {id,title,value,bgImage}=props.prc;

    return (
        <div class="col">

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/membership/" + id}
      >
        <div class="card cardSize"
        style={{
            backgroundImage:`url(${bgImage})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 100%'}}
        >

            <div class="card-body">
                <h5 className='text-center' style={{ color: '#eeae0c' }}>BILLED MONTHLY</h5>
                <h2 class="text-center text-white">{title}</h2>
                <h1 className='text-center' style={{ color: '#eeae0c',fontSize:'450%'}}>{value}</h1>
 
                <div style={{marginTop:50,marginBottom:70}}>
                <ul className="text-white" style={{paddingLeft:90,paddingRight:90,marginBottom:30}}>
                                    <li style={{marginBottom:10}}><FontAwesomeIcon icon={faCheck}/> Mobile-optimized</li>
                                    <li style={{marginBottom:10}}><FontAwesomeIcon icon={faCheck}/> Best hosting</li>
                                    <li style={{marginBottom:10}}><FontAwesomeIcon icon={faCheck}/> Free Custom</li>
                                    <li style={{marginBottom:10}}><FontAwesomeIcon icon={faCheck}/> Outstanding</li>
                                    <li style={{marginBottom:10}}><FontAwesomeIcon icon={faCheck}/> Happy Customers</li>
                                </ul>
                </div>
               
                
                <center>
                <button className='purchase'><b>PURCHASE</b></button>
                </center>
                

            </div>
            {/* card-body */}

        </div>
        </Link>
    </div>
    );
};

export default PricingListCard;