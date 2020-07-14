const { expect } = require("chai");
const count = require("../index");

describe("count characters in string", () => {
  it("should return empty object literal when string is empty", () => {
    expect(count("")).to.eql({});
  });

  it("returns an object with a count of 1 for a single character", () => {
    expect(count("a")).to.eql({ a: 1 });
  });

  it("returns an object with the correct count for multiple characters", () => {
    expect(count("aba")).to.eql({ a: 2, b: 1 });
  });

  it("returns an object with the correct count for a sentence", () => {
    expect(count("hello world")).to.eql({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      " ": 1,
      w: 1,
      r: 1,
      d: 1,
    });
  });
});
