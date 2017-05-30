'use strict';

module.exports = (()=>{
  const U=require('./utility.js');
  const R=require('ramda');
  const P=require('./perceptron.js');
  
  const andGate=P.perceptron([0.5,0.5],-0.7,0);

  const orGate=P.perceptron([0.5,0.5],-0.2,0);

  const nandGate=P.perceptron([-0.5,-0.5],0.7,0);
  
  return {
    andGate:andGate,
    nandGate:nandGate,
    orGate:orGate
  };
  
})();

