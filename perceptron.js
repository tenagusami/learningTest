'use strict';

module.exports = (()=>{
  const U=require('./utility.js');
  const R=require('ramda');
  const C=require('./coordinate.js');
  const math=require('mathjs');

  const stepFunction=(x)=>{
    return x>0?1:0;
  };

  const sigmoidFunction=(x)=>{
    return 1/(1+math.exp(-x));
  };

  const rectiFiedLinearUnitFunction=(x)=>{
    return math.max(0,x);
  };
  
  //const activationFunction=stepFunction;
  const activationFunction=sigmoidFunction;
  
  
  const perceptron=R.curry((weight,bias,threshold)=>{
    return (array)=>{
      return activationFunction(C.innerProduct(array,weight)+bias-threshold);
    };
  });

  return {
    perceptron: perceptron
  };
  
})();
