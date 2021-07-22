const { test, expect} = require("@jest/globals");
const Engineer = require ("../lib/Engineer");

test("Can instantiante new Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});

test("Can set GitHub username via constructor", () => {
  const testValue = "githubTest";
  const e = new Engineer("Jocelyn", 43, "testing@thisisatest.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Can get role via getRole()", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jocelyn", 43, "githubTest");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "githubTest";
  const e = new Engineer("Jocelyn", 43, "testing@thisisatest.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});