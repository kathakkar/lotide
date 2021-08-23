
const tail = require("../tail.js");
const assertArraysEqualObj = require("../assertArraysEqual");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqualObj.eqA(result, ["Lighthouse", "Labs"]); 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertArraysEqualObj.eqA(words.length, 3);
