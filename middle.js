//TEST FUNCTION
const eqArrays = function(array) {
  return assertArraysEqual(array);
}

const assertArraysEqual = function(array) {
  console.log(`Middle Elements of array [${array}] : [${middle(array)}]`); 
}

// ACTUAL FUNCTION
const middle = function(array) {
  let result= (array.length) / 2;
  let resultArray = [];
  if(array.length > 2){
    if(!Number.isInteger(result)){
      resultArray.push(array[parseInt(result)]);
    }
    else if(Number.isInteger(result)){
      resultArray.push(array[result - 1]);
      resultArray.push(array[result]);
    }
    return resultArray;
  }
  else
  {
    return resultArray;
  }

  
}


eqArrays([1, 2, 3]); 
eqArrays([1, 2, 3, 4, 5]); 
eqArrays([1, 2, 3, 4]); 
eqArrays([1, 2, 3, 4, 5, 6]); 
eqArrays([1]); 
eqArrays([1, 2]); 