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
      console.log("🔴🔴🔴 Assertion Failed: arr1 !== arr2")
      return;
    }
  } console.log("✅✅✅ Assertion Passed: arr1 === arr2");
};

const middle = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length < 3) {
      return newArray;
    } else if (array.length % 2 !== 0) {
        newArray = (array[Math.floor(array.length/2)]);
    } else if (array.length % 2 === 0) {
        newArray = (array[(array.length/2) -1] array[(array.length/2)]) ;
    }
  } return newArray;
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1,3,5]));
console.log(middle([1,2,4,6,7,8]));