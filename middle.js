

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
    //console.log(resultArray);
  }

  
}

module.exports = middle;
