
const eqArrays = function (actual, expected){
  var flag = false;
  if(actual.length === 0 && expected.length === 0){
    return true;
  }
  else if(actual.length === expected.length){
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
  } else{
    return false;
  }
}


module.exports = eqArrays;