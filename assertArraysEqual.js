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
console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
