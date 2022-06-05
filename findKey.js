const assertEqual = function(actual, expected) {
  const passed = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  const failed = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;

  console.log(actual == expected ? passed : failed);
};

const findKey = function(object, callback) {

  let star = "";
  let numOfStars = {};

  for (let value in object) {
    numOfStars = object[value];
    if (callback(numOfStars)) {
      star = value;
      break;
    }

  } 
    return star;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");

