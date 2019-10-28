const missingInts = require("./missing-ints");

describe("mini-jump", () => {
  it("can handle e-mail example one", () => {
    expect(missingInts([1, 3, 3, 3, 5, 6])).toEqual([2, 4]);
  });

  it("can handle e-mail example two", () => {
    expect(missingInts([1, 2, 3, 4, 4, 7, 7])).toEqual([5, 6]);
  });

  it("can handle a large gap", () => {
    expect(missingInts([1, 10])).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("can handle a starting integer that isn't 1", () => {
    expect(missingInts([3, 4, 7, 7, 8])).toEqual([5, 6]);
  });

  it("can handle negatives", () => {
    expect(missingInts([-5, -4, -1])).toEqual([-3, -2]);
  });
});
