import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

import { useFormikContext } from 'formik';

import autreNoms from '../states/autreNoms';
import demandeNom from '../states/demandeNom';
import recapDonnees from '../states/recapDonnees';

import StateMachine from '../StateMachine';


const getSteps = () => {
  return [
    'entrez un nom',
    'un autre nom ?',
    'recapitulatif',
   ];
};

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <demandeNom />;
    case 1:
      return <autreNoms />;
    case 2:
      return <recapDonnees />;

    default:
      return 'Unknown stepIndex';
  }
};

const MyStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const { values} = useFormikContext();


  const handleNext = () => {
    console.log(StateMachine.state);
    if (StateMachine.state === 'B' && values.question === 'oui') {
      console.log('StateMachine.loop()');
      StateMachine.loop();
    } else {
      try {
        StateMachine.step();
      } catch (e) {}
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    // setState(StateMachine.state);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Paper elevation={3}>
              <Typography >
                All steps completed
              </Typography>
            </Paper>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </div>
        ) : (
          <div>
            <Paper elevation={3}>
                {getStepContent(activeStep)}
            </Paper>

            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyStepper;
