import React from 'react';
import TrainingProgramsCard from '../TrainingProgramsCard/TrainingProgramsCard';
import './TrainingPrograms.css';

const TrainingPrograms = () => {
    const trainingPrograms = [
        {
            id: 'ABCDEFGHIJKL',
            image: 'https://i.imgur.com/I2T3uyZ.png',
            title: 'YOGA TRAINING'
        },
        {
            id: 'HIJKLMNOPQRST',
            image: 'https://i.imgur.com/dnYFuGQ.jpg',
            title: 'CARDIO TRAINING'
        }
    ]
    return (
        <div style={{ paddingLeft: 100, paddingRight: 100, marginBottom: 100 }}>

            <h1 className='text-center mb-5'>TRAINING <span style={{ color: '#eeae0c' }}>PROGRAMS</span> </h1>
            <div class="row row-cols-1 row-cols-md-2 g-3">

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