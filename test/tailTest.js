
const tail = require("../tail.js");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays.js");
const assertEqual = require("../assertEqual");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(eqArrays(result, ["Lighthouse", "Labs"]),result,["Lighthouse", "Labs"]); 


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);
