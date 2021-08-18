
//TEST FUNCTION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  }
  if(actual !== expected){
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (someString){
  const results = {};

  for(let i = 0; i < someString.length; i++){
    if(someString[i] !== " "){
     
      if(results[someString[i]]){
        results[someString[i]] += 1;
      }
      else{
        results[someString[i]] = 1;
      }
    }
  }
  
  return results;

}

result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);

