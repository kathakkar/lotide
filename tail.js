const assertEqual = function(actual, expected) {
 // let flag;
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
  let newarr = [];
  for(let i = 1; i <= arr.length - 1; i++){
     newarr.push(arr[i]);
  }
  return newarr;
}

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);