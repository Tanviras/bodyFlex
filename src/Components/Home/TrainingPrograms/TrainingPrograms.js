import React from 'react';
import TrainingProgramsCard from '../TrainingProgramsCard/TrainingProgramsCard';
import './TrainingPrograms.css';

const TrainingPrograms = () => {
    const trainingPrograms = [
        {
            id: 'ABCDEFGHIJKL',
            image: 'https://i.imgur.com/I2T3uyZ.png',
            title: 'YOGA TRAINING SESSION'
        },
        {
            id: 'HIJKLMNOPQRST',
            image: 'https://i.imgur.com/dnYFuGQ.jpg',
            title: 'CARDIO TRAINING SESSION'
        }
    ]
    return (
        <div style={{ paddingLeft: 115, paddingRight: 115, marginBottom: 100 ,marginTop:100}}>

            <h1 className='text-center mb-5'>TRAINING <span style={{ color: '#eeae0c' }}>PROGRAMS</span> </h1>

            <div className="row text-center justify-content-around">
                {
                    trainingPrograms.map(trainingProgram =>
                        <TrainingProgramsCard key={trainingProgram.id} trainingProgram={trainingProgram}>
                        </TrainingProgramsCard>
                    )
                }
            </div>

        </div>
    );
};

export default TrainingPrograms;