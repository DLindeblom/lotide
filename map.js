const assertArraysEqual = function(input1, input2) {
  if (input1 !== input2) {
    console.log("🔴🔴🔴 Assertion Failed: input1 !== input2")
    return;
    
  } console.log("✅✅✅ Assertion Passed: input1 === input2");
};


const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const words = ["There", "is", "no", "end", "in", "sight"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
  
};

const results1 = map(words, word => word[1]);

//console.log(results1);



