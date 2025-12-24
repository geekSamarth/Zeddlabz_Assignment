const twoSum = require("../utils/twoSum.js");

test("finds two numbers that sum to target", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("works with unordered input", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
