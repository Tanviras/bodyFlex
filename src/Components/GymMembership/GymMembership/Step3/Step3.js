import React from 'react';

const Step3 = ({activeStep,steps,handleNext}) => {
    console.log(`step 3 er activeStep:${activeStep}, ar total steps:${steps.length}`);

    return (
        <div>
            <h1>You have come so far, one final step for you!</h1>

            <button class="btn btn-primary" onClick={handleNext}>
                {activeStep === steps.length ? 'Back to home page' : 'Complete membership'}
            </button>
        </div>
    );
};

export default Step3;