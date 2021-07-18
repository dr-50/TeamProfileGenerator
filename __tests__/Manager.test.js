const Manager = require("../lib/Manager")

test("check Manager role", () => {
    const testVal = "Manager";
    const emp = new Manager("Mossy",1, "email@email.com");
    expect(emp.getRole()).toBe(testVal)
})

test("check Manager officePhone", () => {
    const testVal = "867-5309";
    const emp = new Manager("Mossy",1, "email@email.com", testVal);
    expect(emp.getOfficeNumber()).toBe(testVal)
})