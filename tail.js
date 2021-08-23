

const tail = function(arr) {
  let newarr = [];
  for(let i = 1; i <= arr.length - 1; i++){
     newarr.push(arr[i]);
  }
  return newarr;
}


module.exports = tail;