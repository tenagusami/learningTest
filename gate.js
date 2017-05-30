'use strict';

module.exports = (()=>{
  const U=require('./utility.js');
  const R=require('ramda');
  const P=require('./perceptron.js');

  const p=P.perceptron;
  
  const andGate=p([0.5,0.5],-0.7,0);

  const orGate=p([0.5,0.5],-0.2,0);

  const nandGate=p([-0.5,-0.5],0.7,0);

  const xorGate=(inputArray)=>{
    return andGate([nandGate([inputArray[0],inputArray[1]]),
		   orGate([inputArray[0],inputArray[1]])]);
  };
  
  return {
    andGate:andGate,
    nandGate:nandGate,
    orGate:orGate,
    xorGate: xorGate
  };
  
})();

