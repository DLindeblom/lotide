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

const middle = function(array) {
  let newArray = [];
  if (array.length < 3) {
    return newArray;
  }
  if (array.length % 2 !== 0) {
    newArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    newArray.push((array[Math.floor(array.length / 2) - 1]));
    newArray.push((array[Math.floor(array.length / 2)]));
  } return newArray;
};

assertArraysEqual(middle([1]), {}); // => []
assertArraysEqual(middle([1, 2], {})); // => []
assertArraysEqual(middle([1,3,5]), [3]);
assertArraysEqual(middle([1,3,5,7,9,11,13,15,17,19]), [9, 11]);