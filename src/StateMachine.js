import StateMachine from 'javascript-state-machine';

const fsm = new StateMachine({
  init: 'A',
  transitions: [
    { name: 'next', from: 'A', to: 'B' },
    { name: 'next', from: 'B', to: 'C' },
    { name: 'loop', from: 'B', to: 'A' },

    { name: 'reset', from: 'C', to: 'A' },
  ],
});

export default fsm;
