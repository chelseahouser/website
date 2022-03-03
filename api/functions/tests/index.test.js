const chai = require("chai");
const assert = chai.assert;
const sinon = require("sinon");
const admin = require("firebase-admin");
const test = require("firebase-functions-test")();

describe("index", () => {
  let adminInitStub;

  before(() => {
    adminInitStub = sinon.stub(admin, "initializeApp");
  });

  after(() => {
    adminInitStub.restore();
    test.cleanup();
  });

  describe("index", () => {
    it("should run my tests", () => {
      assert.equal("true", "true");
    });
  });
});
