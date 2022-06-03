const assertEqual = function(actual, expected) {
  const passed = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  const failed = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
    
  console.log(actual == expected ? passed: failed);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const eqObjects = function(object1, object2) {

  let myKeys1 = Object.keys(object1);
  let myKeys2 = Object.keys(object2);

  if (myKeys1.length !== myKeys2.length) {
    return false;
  }

  for (let key of myKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  const result = eqObjects(object1, object2)
    assertEqual(result, true);
};

// const cd = { c: "1", d: ["2", 3,] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc)

const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(dc, cd2);