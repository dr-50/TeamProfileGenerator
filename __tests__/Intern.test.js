const Intern = require("../lib/Intern")

test("check Intern role", () => {
    const testVal = "Intern";
    const emp = new Intern("Mossy",1, "email@email.com");
    expect(emp.getRole()).toBe(testVal)
})

test("check Intern school", () => {
    const testVal = "School-Test";
    const emp = new Intern("Mossy",1, "email@email.com", testVal);
    expect(emp.getSchool()).toBe(testVal)
})