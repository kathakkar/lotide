
const findKey = (obj, cb) => {
  let keys = Object.keys(obj);
  for(let k of keys){
    if(cb(obj[k])){
      return k;
    }
  }     
}

const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  }
  if(actual !== expected){
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

objResult = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
const result1 = findKey(objResult, x => x.stars === 2); 
assertEqual(result1,"noma");