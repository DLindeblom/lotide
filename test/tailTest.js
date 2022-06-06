const assert = require("chai").assert;
const tail = require("../tail");


describe("tests for the tail function", () => {

  it("returns 5 for [1,2,3,4,5]", () => {
    const result = tail([1, 2, 3, 4, 5]);
    assert.deepEqual([5], result);

  });

  it("returns 4 for the [1,2,3,4]", () => {
    const result = tail([1, 2, 3, 4]);
    assert.deepEqual([4], result);

  });

  it("returns 1 for the [1]", () => {
    const result = tail([1]);
    assert.deepEqual([1], result);

  });

});