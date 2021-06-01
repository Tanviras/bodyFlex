import React from 'react';
import './ClassListCard.css';
import { Link } from "react-router-dom";

const ClassListCard = (props) => {
    const { id, image, title } = props.cls;

    return (
        <div class="col classCard">

            <Link className='cardLink' to="/pricing">
                <div class="card h-100"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%',
                    }}
                >

                    <div class="card-body">
                        <h5 class="card-title text-center classBody">{title}</h5>
                    </div>
                </div>
            </Link>

        </div>

    );
};

export default ClassListCard;