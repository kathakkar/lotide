//TEST FUNCTION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  }
  if(actual !== expected){
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj,valueTofind){
  const key = Object.keys(obj) 
  let result = "";
  for(let i = 0; i < key.length; i++){
    if(obj[key[i]] === valueTofind){
      result = key[i];
    }
    else
    {
      result = undefined;
    }
  }
  return result;
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);