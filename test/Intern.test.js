const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Can instantiante new Intern instance", () => {
  const e = new Intern();
  expect(typeof e).toBe("object");
});

test("Can set school via constructor", () => {
  const testValue = "UCF";
  const e = new Intern("Jocelyn", 43, "testing@thisisatest.com", testValue);
  expect(e.school).toBe(testValue);
});
// should this say shannon,21,email,school after new intern?
test("Can get role via getRole()", () => {
  const testValue = "Intern";
  const e = new Intern("Jocelyn", 43, "UCF");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCF";
  const e = new Intern("Jocelyn", 43, "testing@thisisatest.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
