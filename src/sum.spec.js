import add from "./sum";

describe("Test Suite for :: sum.js", () => {
  test("1. should sum two numbers", () => {
    expect(add(1, 3)).toBe(4);
  });
});
