const miniJump = require("./mini-jump");

// This week's question:
// Write a function where given an array of integers (where each element represents the max number
// of steps that can be made forward from that element), return the minimum number of jumps to reach
// the end of the array (starting from the first element).

// Example:
// miniJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])

describe("mini-jump", () => {
  it("can handle the example", () => {
    expect(miniJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])).toBe(3);
  });

  it("can handle an empty array", () => {
    expect(miniJump([])).toBe(0);
  });

  it("can handle a zero", () => {
    expect(miniJump([0])).toBe(-1);
  });

  it("can handle a first-move ending", () => {
    expect(miniJump([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(1);
  });

  it("can handle another first-move ending", () => {
    expect(miniJump([1, 1])).toBe(1);
  });
});
