const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate new Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Janice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 3;
  const e = new Employee("Rock", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "testing@thisisatest.com";
  const e = new Employee("Rock", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Janice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 3;
  const e = new Employee("Rock", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "testing@thisisatest.com";
  const e = new Employee("Rock", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can get employee via getRole()", () => {
  const testValue = "Employee";
  const e = new Employee("Janice", 3, "testing@thisisatest.com");
  expect(e.getRole()).toBe(testValue);
});