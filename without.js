const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("🔴🔴🔴 Assertion Failed: arr1 !== arr2");
      return;
    }
  } console.log("✅✅✅ Assertion Passed: arr1 === arr2");
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let number of source) {
    if (!itemsToRemove.includes(number)) {
      newArray.push(number);
    }
  } return newArray;
};


