const assert = require("assert");
const { expect } = require("chai");
const { add, subtract } = require("../app");

describe("the add function", () => {
  it("should add 2 numbers together", () => {
    const result = add(2, 2);
    //assert.equal(result, 4); without chai
    expect(result).to.be.eq(4);
  });

  it("should be able to handle 1 number", () => {
    const result = add(2);
    expect(result).to.be.eq(2);
  });

  it("should be able to handle 0 numbers", () => {
    const result = add();
    expect(result).to.be.eq(0);
  });

  it("should return 0 if either argument is not a number", () => {
    const result = add(2, "test");
    expect(result).to.be.eq(0);
  });
});

describe("the subtract function", () => {
  it("should subtract one argument from another", () => {
    const result = subtract(2, 1);
    expect(result).to.be.eq(1);
  });

  it("should be able to handle 1 number", () => {
    const result = subtract(2);
    expect(result).to.be.eq(2);
  });

  it("should be able to handle 0 numbers", () => {
    const result = subtract();
    expect(result).to.be.eq(0);
  });

  it("should return 0 if either argument is not a number", () => {
    const result = subtract(2, "test");
    expect(result).to.be.eq(0);
  });
});
