const assertEqual = function(actual, expected) {
  if(actual.length === expected.length){
    for(let i = 0; i <= actual.length - 1; i++){
      if(actual[i] === expected[i]){
        flag = true;
      }
      if(actual[i] !== expected[i]){
        flag = false;
      }
    }
  }
  else
  {
    flag = false;
  }
  if(flag === true){
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  }
  else if(flag === false){
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  let first = arr.shift();
  return arr;
}

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 