const assertEqual = function(actual, expected) {
  const passed = `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  const failed = `🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(passed);
  } else {
    console.log(failed);
  }
};


const head = function(array) {
  return array[0];
}  

assertEqual(head([8, 9, 10]), 8);
assertEqual(head(["Lighthouse", "Labs"]), "Lighthouse");