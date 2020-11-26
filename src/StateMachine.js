import StateMachine from 'javascript-state-machine';
// import Steps from './components/Steps';


const fsm = new StateMachine({
  init: 'A',
  transitions: [
    { name: 'next', from: 'A', to: 'B' },
    { name: 'next', from: 'AA', to: 'B' },
    { name: 'next', from: 'B', to: 'C' },
    { name: 'loop', from: 'B', to: 'A' },
    { name: 'stay', from: 'A', to: 'AA' },



    { name: 'previous', from: 'AA', to: 'A' },
    { name: 'previous', from: 'B', to: 'AA' },
    { name: 'previous', from: 'B', to: 'A' },
    { name: 'previous', from: 'C', to: 'B' },

    { name: 'reset', from: 'C', to: 'A' },
  ],
//   if (StateMachine.state === 'A' && values.mariage === 'oui') {
//     console.log('Case state A and yes')
//         setActiveStep(STEP_EPOUX);

//         StateMachine.stay();
//     }
});

export default fsm;
