
const assertArraysEqualObj = require('../assertArraysEqual');

assertArraysEqualObj.eqA([1, 2, 3], [1, 2, 3]);// => true
assertArraysEqualObj.eqA([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqualObj.eqA(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqualObj.eqA(["1", "2", "3"], ["1", "2", 3]); // => false