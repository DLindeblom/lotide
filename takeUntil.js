const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertEqual = function(actual, expected) {
  const passed = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  const failed = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;

  console.log(actual === expected ? passed : failed);
};

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  assertEqual(result, true);
};



const takeUntil = function(array, callback) {
  let newArray = [];
  for (let i of array) {
    if (!callback(i)) {
      newArray.push(i);
    } else if (callback(i)) {
      break;
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x === 5);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === "to");
console.log(results2);

assertArraysEqual(results2, ["I've", "been"]);
assertArraysEqual(results1, [1, 2]);