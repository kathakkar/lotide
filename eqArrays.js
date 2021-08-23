
//const assertEqual = require("./assertEqual");
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
}


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);// => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
module.exports = eqArrays;