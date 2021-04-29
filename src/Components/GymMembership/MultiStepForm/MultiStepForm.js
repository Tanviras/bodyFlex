import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../GymMembership/Step3/Step3';
import { Link } from '@material-ui/core';
import Home from "./../../Home/Home/Home";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingLeft: 100,
    paddingRight: 100,
    marginBottom: 100,
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: 'red'
    },
    '& .MuiStepIcon-root.MuiStepIcon-completed': {
      color: 'green'
    }
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));




const MultiStepForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  function getSteps() {
    return ['Personal Details', 'Bank Payment', 'Membership Created'];
  }


  const steps = getSteps();


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };


  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const handleProgressBarCompletion=()=>{
    window.location.href = '/home'
  }


  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Step1
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <Step2
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
          />
        );
      // case 2:
      //   return (
          
      //   );
      default:
        return (
          <Step3
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
          />
        );
    }
  }


  return (
    <div className={classes.root}>

      <Stepper activeStep={activeStep} alternativeLabel>
        {
          steps.map(label => {

            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })
        }
      </Stepper>


      <>
        {activeStep === steps.length ? 
            <div>
              <h1>Membership created successfully!</h1>

              <button className='btn btn-primary' onClick={handleProgressBarCompletion}>
                Back to home page
              </button>
              
            </div>
            
           
        
        : (
          <>
            {getStepContent(activeStep)}
          </>
        )}
      </>
    </div>
  );
};

export default MultiStepForm;