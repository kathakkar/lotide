const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  }
  if(actual !== expected){
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
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
  if(key1.length === key2.length){

    for(k of key1){
     if(Array.isArray(object1[k]) && Array.isArray(object2[k])){
        return eqArrays(object1[k],object2[k]);
      }
      else if(object1[k] !== object2[k]){
        return false;
      }
      
    }
    return true; 
  }
  else
  {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false