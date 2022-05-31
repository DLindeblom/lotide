const assertEqual = function(actual, expected) {
  const passed = '✅✅✅Assertion Passed: ' + (actual) + ' === ' + (expected);
  const failed = '🔴🔴🔴Assertion Failed: ' + (actual) + ' !== ' + (expected);
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};

assertEqual('Bootcamp', "Bootcamp");
assertEqual((3 - 2), 1);