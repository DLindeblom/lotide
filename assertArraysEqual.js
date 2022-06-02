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


assertArraysEqual(true), true)