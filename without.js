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

const without = function(array, values) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
    for (let j = 0; j < values.length; j++) {
      if (values[j] === newArray[i]) {
        newArray.splice(values[i], 1)
      }
    }
  }console.log(newArray);
}


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"])
without([1,2,3,4,5,6,7], [2,4,6]);