 import React from 'react'
 import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '60%',
      display: 'inline-block',
    },
  }));

 function getSteps() {
    return ['Input Page', 'Confirm Page', 'Finish Page'];
  }

 function StepperComponent (){
    const classes = useStyles();
   const steps = getSteps();

return (
    <div className={classes.root} >
       <Stepper activeStep={0}>
       {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
           </Stepper> 
    </div>
)

 }

 export default StepperComponent