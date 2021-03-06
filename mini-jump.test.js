const miniJump = require("./mini-jump");

describe("mini-jump", () => {
  it("can handle the example", () => {
    expect(miniJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])).toBe(3);
  });

  it("can handle an empty array", () => {
    expect(miniJump([])).toBe(0);
  });

  it("can handle a starting zero", () => {
    expect(miniJump([0])).toBe(0);
  });

  it("can handle a first-move ending", () => {
    expect(miniJump([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(1);
  });

  it("can handle another first-move ending", () => {
    expect(miniJump([1, 1])).toBe(1);
  });

  it("can handle a zero after the first index", () => {
    expect(miniJump([1, 0, 1])).toBe(-1);
  });

  it("can handle a long series of ones", () => {
    expect(miniJump([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(9);
  });
});
