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
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  }
  if(flag === false){
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
}


module.exports = {
  eqA : eqArrays,
  aA : assertArraysEqual
}