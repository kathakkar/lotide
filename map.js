

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


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

}

const assertArraysEqual = function (flag,actual,expected){
  if(flag === true){
    return `✅️ Assertion Passed: ${actual} === ${expected}`;
  }
  if(flag === false){
    return `❌️ Assertion Failed: ${actual} !== ${expected}`;
  }
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(eqArrays(results1,[ 'g', 'c', 't', 'm', 't' ]));