const letterPositions = function(sentence) {
  const results = {};
  let arr = [];
  let j = -1;
  for(let i = 0; i < sentence.length; i++){
   
    results[sentence[i]] = [];
    while((j = sentence.indexOf(sentence[i], j+1)) >= 0){
      arr.push(j);
    }
    results[sentence[i]]=arr;
    arr=[];
  }
  
  return results;
};

const eqArrays = function (actual, expected){
  var flag = false;
  if(actual.length === expected.length){
    for(let i = 0; i < actual.length; i++) {
      if(actual[i] !== expected[i]){
        flag = false;
      }
      else
      {
        flag = true;
      }
    }
    return assertArraysEqual(flag,actual,expected);
  }
  else{
    return assertArraysEqual(false,actual,expected);
  }

};

const assertArraysEqual = function (flag,actual,expected){
  if(flag === true){
    return `✅️ Assertion Passed: ${actual} === ${expected}`;
  }
  if(flag === false){
    return `❌️ Assertion Failed: ${actual} !== ${expected}`;
  }
};
const result1 = letterPositions("hello");
console.log(eqArrays(result1.e, [1]));
