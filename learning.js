'use strict';

module.exports = (()=>{
  const U=require('./utility.js');
  const R=require('ramda');
  const g=require('./gate.js');
  const p=require('./perceptron.js');
  const math=require('mathjs');
  const M=math.matrix;
  
  const initialTest=()=>{
    return {weights:
	    [M([[0.1,0.3,0.5],[0.2,0.4,0.6]]),
	     M([[0.1,0.4],[0.2,0.5],[0.3,0.6]]),
	     M([[0.1,0.3],[0.2,0.4]])],
	    biases:
	    [M([0.1,0.2,0.3]),
	     M([0.1,0.2]),
	     M([0.1,0.2])],
	    activator:
	    [p.sigmoidFunction,
	     p.sigmoidFunction,
	     R.identity]
	   };
  };
  
  const learn=()=>{
    //console.log(g.andGate([0,1]));
    console.log(p.forward(initialTest())(M([1.0,0.5])));
  };
  
  return {
    learn: learn
  };
  
})();
  
