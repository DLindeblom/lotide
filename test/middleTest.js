const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([1]), []); 
assertArraysEqual(middle([1, 2]), []); 
assertArraysEqual(middle([1,3,5]), [3]);
assertArraysEqual(middle([1,3,5,7,9,11,13,15,17,19]), [9, 11]);