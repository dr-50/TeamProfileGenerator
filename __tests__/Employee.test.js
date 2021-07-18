const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("return Employee from getRole()", ()=> {
    const testVal = "Employee";
    const emp = new Employee("Mossy",1, "email@email.com");
    expect(emp.getRole()).toBe(testVal) 
})

test("check employee has name", ()=> {
    const testVal = "Mossy";
    const emp = new Employee(testVal, 1, "email@email.com");
    expect (emp.name).toEqual(expect.any(String));
    expect (emp.getName()).toBe(testVal)
})

test("check employee has email", () => {
    const testVal = "email@email.com";
    const emp = new Employee("mossy", 1, testVal);
    expect (emp.email).toEqual(expect.any(String));
    expect (emp.getEmail()).toBe(testVal)
})