'use strict';

module.exports = (()=>{
  const U=require('./utility.js');
  const R=require('ramda');
  const g=('./gate.js');
  
  const learn=()=>{
    console.log(g.andGate([0,1]));
  };

  return {
    learn: learn
  };
  
})();
  
