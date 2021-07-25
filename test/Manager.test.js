const { test, expect} = require("@jest/globals");
const Manager = require ("../lib/Manager");

test("Can instantiante new Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
})

test("Can set office number via constructor", () => {
    const testValue = "345";
    const e = new Manager("Jocelyn", 43, "testing@thisisatest.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });

  test("Can get role via getRole()", () => {
    const testValue = "Manager";
    const e = new Manager("Jocelyn", 43, "345");
    expect(e.getRole()).toBe(testValue);
  });

  test("Can get office number via getOfficeNumber()", () => {
    const testValue = "345";
    const e = new Manager("Jocelyn", 43, "testing@thisisatest.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });