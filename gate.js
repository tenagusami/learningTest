'use strict';

module.exports = (()=>{
  const U=require('./utility.js');
  const R=require('ramda');
  const P=('./perceptron.js');
  
  const andGate=(input)=>{
    return P.perceptron([0.5,0.5],0,0.7)(input);
  };

  return {
    andGate:andGate
  };
  
})();
