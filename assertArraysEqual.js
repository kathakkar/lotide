
const eqArrays = require("./eqArrays");


const assertArraysEqual = function (flag,actual,expected){
  if(flag === true){
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  }
  if(flag === false){
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
}


module.exports = assertArraysEqual;
