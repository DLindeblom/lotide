const assert = require("chai").assert;
const middle = require("../middle");

describe("testing the middle function", () => {

  it("should return 2 in [1,2,3]", () => {
    const result = middle([1, 2, 3]);
    assert.deepEqual([2], result);

  });

  it("should return 4,5 in [3,4,5,6]", () => {

    const result = middle([3, 4, 5, 6]);
    assert.deepEqual(([4, 5]), result);

  });

  it("should return [] if [1,2]", () => {

    const result = middle([1,2]);
    assert.deepEqual(([]), result);

  });

});