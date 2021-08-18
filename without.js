const without = function (source, itemsToRemove){
  var newArry = [];
 
    for(let j = 0; j < source.length; j++) {
      if(!itemsToRemove.includes(source[j])){
        newArry.push(source[j]);
      }
    }
    return newArry;
}
const assertArraysEqual = function (words, arr){
  console.log(without(words, arr));
  console.log(without([1, 2, 3], [1]));
  console.log(without(["1", "2", "3"], [1, 2, "3"]));
  console.log(without(words, ["lighthouse"]));
}


const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);