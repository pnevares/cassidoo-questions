const dayOffset = require("./day-offset-min");

describe("day-offset", () => {
  describe("valid input", () => {
    it("the example", () => {
      expect(dayOffset("Wednesday", 4)).toBe("Sunday");
    });

    it("a zero offset", () => {
      expect(dayOffset("Wednesday", 0)).toBe("Wednesday");
    });

    it("an offset past the end", () => {
      expect(dayOffset("Saturday", 1)).toBe("Sunday");
    });

    it("a negative offset", () => {
      expect(dayOffset("Wednesday", -1)).toBe("Tuesday");
    });

    it("an offset past the beginning", () => {
      expect(dayOffset("Sunday", -1)).toBe("Saturday");
    });

    it("a large positive offset", () => {
      expect(dayOffset("Wednesday", 700004)).toBe("Sunday");
    });

    it("a large negative offset", () => {
      expect(dayOffset("Wednesday", -700004)).toBe("Saturday");
    });
  });

  describe.skip("invalid input", () => {
    it("an invalid day", () => {
      expect(dayOffset("Smarch", 11)).toBe(null);
    });

    it("an invalid offset", () => {
      expect(dayOffset("Wednesday", "string")).toBe(null);
    });

    it("a decimal offset", () => {
      expect(dayOffset("Wednesday", 1.1)).toBe(null);
    });
  });
});
