const takeUntil = (array, cb) => {
  result = [];
  for(let i = 0; i <= array.length; i++){
    if(!cb(array[i])) {
      result.push(array[i]);
    } 
    else{
      return result;
    }
  }
}

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




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(eqArrays(results1,[ 1, 2, 5, 7, 2 ]));
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(eqArrays(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]));