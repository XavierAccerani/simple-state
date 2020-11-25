import StateMachine from 'javascript-state-machine';

const fsm = new StateMachine({
  init: 'A',
  transitions: [
    { name: 'step', from: 'A', to: 'B' },
    { name: 'step', from: 'B', to: 'C' },
    { name: 'loop', from: 'B', to: 'A' },

    { name: 'reset', from: ['B', 'C'], to: 'A' },
  ],
});

export default fsm;
