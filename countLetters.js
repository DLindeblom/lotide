const assertEqual = function(actual, expected) {
  const passed = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  const failed = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

const countLetters = function(string) {
  const letters = {};
  string = string.replace(/\s+/g, '')
  for (let letter of string) {
    if (letters[letter] === undefined) {
      letters[letter] = 1;
    } else {
      letters[letter]++;
    } 
  } return letters;
};

