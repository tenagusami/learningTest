'use strict';

module.exports = (()=>{
  const U=require('./utility.js');
  const R=require('ramda');
  const C=require('./coordinate.js');

  const perceptron=R.curry((weight,bias,threshold)=>{
    return (array)=>{
      return C.innerProduct(array,weight)+bias>threshold;
    };
  });

  return {
    perceptron: perceptron
  };
  
})();
