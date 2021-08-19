
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
    return flag;
  }
  else{
    return false;
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  let flag = false;
  if(key1.length === key2.length){

    for(k of key1){
     if(Array.isArray(object1[k]) && Array.isArray(object2[k])){
        flag = eqArrays(object1[k],object2[k]);
      }
      else if(object1[k] !== object2[k]){
        flag = false;
      }
      
    }
    flag = true; 
  }
  else
  {
    flag = false;
  }

  return assertObjectsEqual(flag, object1, object2);
};

const assertObjectsEqual = function (flag,actual,expected){
  const inspect = require('util').inspect; 
  if(flag === true){
    console.log(`✅️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  if(flag === false){
    console.log(`❌️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);