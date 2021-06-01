import React from 'react';
import './TrainingProgramsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TrainingProgramsCard = (props) => {
    const { id, image, title } = props.trainingProgram;

    return (
        // <div className="col tpCard">
        // <div className="tpCardSize"
        // style={{
        //     backgroundImage:`url(${image})`,
        //     backgroundPosition:'center',
        //     backgroundRepeat:'no-repeat',
        //     backgroundSize:'100% 100%'}}
        // >


        // <div className=" card-body">
        //     <h4 className="card-title text-dark cardTitle">
        //         {title}<FontAwesomeIcon icon={faArrowRight}/>
        //     </h4>
        // </div>




        // </div>
        // </div>


        <div class="col tp__card">
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
        </div>


    );
};

export default TrainingProgramsCard;