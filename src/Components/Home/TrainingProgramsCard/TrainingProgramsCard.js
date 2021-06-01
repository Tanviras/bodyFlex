import React from 'react';
import './TrainingProgramsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const TrainingProgramsCard = (props) => {
    const { id, image, title } = props.trainingProgram;

    return (
        <div class="col tp__card">
                <Link className='cardLink' to="/ourClasses">
            <div class="card h-100"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                }}
            >

                    <div>
                        <h4 className="tp__title text-dark">
                            {title}<FontAwesomeIcon icon={faArrowRight} />
                        </h4>
                    </div>




            </div>
            </Link>
        </div>
        


    );
};

export default TrainingProgramsCard;