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

  const forwardLayer=(weight,bias,activator)=>{
    return (previousLayerOutput)=>{
      return math.chain(previousLayerOutput)
	.multiply(weight)
	.add(bias)
	.map(activator)
	.done();
    };
  };

  const activate=(activator)=>{
    return (weightedAggregation)=>{
      return weightedAggregation.map(activator);
    };
  };

  const softmax=(matrixVector)=>{
    const c=math.max(matrixVector);
    const exps=math.chain(matrixVector)
	  .subtract(c)
	  .exp()
	  .done();
    const exps_sum=math.sum(exps);
    return math.divide(exps,exps_sum);
  };
  
  const forward=(propagator)=>{
    const nLayers=propagator.weights.length;
    return (inputNodes)=>{
      let outputNodes=inputNodes;
      for(let iLayer of U.intList(nLayers)){
	//console.log(outputNodes);
	outputNodes=forwardLayer(
	  propagator.weights[iLayer],
	  propagator.biases[iLayer],
	  propagator.activator[iLayer])(outputNodes);
      }
      //return outputNodes;
      return softmax(outputNodes);
    };
  };
  
  
  return {
    forward: forward,
    rectiFiedLinearUnitFunction: rectiFiedLinearUnitFunction,
    perceptron: perceptron,
    sigmoidFunction: sigmoidFunction,
    stepFunction: stepFunction
  };
  
})();
