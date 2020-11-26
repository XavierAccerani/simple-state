import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

import { useFormikContext } from 'formik';

import AutreNoms from '../states/autreNoms';
import DemandeNom from '../states/demandeNom';
import RecapDonnees from '../states/recapDonnees';
import DemandeEpoux from '../states/demandeEpoux';

import StateMachine from '../StateMachine';

import natural from '../models/natural';
// import initialValues from '../models/initialValues';

const STEP_RECAP = 2;
const STEP_NOM = 0;
// pour afficher la de mande de nom de l'epoux
const STEP_EPOUX = 0.5;
// fin de l'affiche de demande de nom de l'epoux 
const STEP_QUESTION = 1;
const STEP_FINISHED = 3;

const getSteps = () => {
  return [
    'Entrez un nom',
    'Un autre associé?',
    'Recapitulatif',
   ];
};
    
const getStepContent = (stepIndex) => {
  console.log(`getStepContent(${stepIndex})`)  
  switch (stepIndex) {
    case 0:
      return <DemandeNom/>;
    case 0.5:
      return <DemandeEpoux/>;
    case 1:
      return <AutreNoms/>;
    case 2:
      return <RecapDonnees/>;

    default:
      return 'Unknown stepIndex';
  }
};

const MyStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const { values } = useFormikContext();



  const handleNext = () => {
    console.log(`StateMachine`,StateMachine.state);
  //  condition pour passer de l'etat A a AA sans changer de step dans le stepper 
    if (StateMachine.state === 'A' && values.mariage === 'oui') {
      console.log('Case state A and yes')
          setActiveStep(STEP_EPOUX);

          StateMachine.stay();
      }
// fin condition pour passer de l'etat A a AA sans changer de step dans le stepper

// condition pour passe rde l'etat AA a B et changer de step dans le stepper 

else if (StateMachine.state === 'AA') {
  console.log('Case state AA')
      setActiveStep(STEP_QUESTION);
      StateMachine.next();
  }
// fin de  condition pour passe rde l'etat AA a B et changer de step dans le stepper 

    else if (StateMachine.state === 'A') {
      console.log('Case state A')
          setActiveStep(STEP_QUESTION);
          StateMachine.next();
      }
    else if (StateMachine.state === 'B' && values.question==="oui") {
      console.log('Case state B and yes')
      setActiveStep(STEP_NOM);
      values.partners.push(natural);
      values.index += 1;
      values.question = '';
      StateMachine.loop();
    }
    else if (StateMachine.state === 'B' && values.question==="non") {
      console.log('Case state B and no')
      setActiveStep(STEP_RECAP);
      StateMachine.next();
    } else if( StateMachine.state === 'C' ) {
      setActiveStep(STEP_FINISHED);
      StateMachine.reset();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(STEP_NOM);
    values.question = '';
    values.partners = [];
    values.index = 0;
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
        {activeStep === STEP_FINISHED ? (
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
            <Paper elevation={3}>
                State: {StateMachine.state} <br/>
                Step: {activeStep} <br/>
                Numero: {values.index}
            </Paper>

            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === STEP_RECAP ? 'Finish' : 'Next'}
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
