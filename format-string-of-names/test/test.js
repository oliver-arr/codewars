const { expect } = require("chai");
const list = require("../index");

describe("format string of names", () => {
  it("return empty string for an empty array", () => {
    expect(list([])).to.equal("");
  });

  it("return name for an array of one name", () => {
    expect(list([{ name: "Bart" }])).to.equal("Bart");
  });

  it('return two names separted with an "&" for an array of two names', () => {
    expect(list([{ name: "Bart" }, { name: "Lisa" }])).to.equal("Bart & Lisa");
  });

  it("return three names in a comma and appersand separted list for an array of three names", () => {
    expect(
      list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).to.equal("Bart, Lisa & Maggie");
  });

  it("returns a formatted list for multiple names", () => {
    expect(
      list([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "Chloe" },
        { name: "Kate" },
      ])
    ).to.equal("Bart, Lisa, Maggie, Chloe & Kate");
  });
});
