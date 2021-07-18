const Engineer = require("../lib/Engineer")

test("check engineer role", () => {
    const testVal = "Engineer";
    const emp = new Engineer("Mossy",1, "email@email.com");
    expect(emp.getRole()).toBe(testVal)
})

test("check engineer github", () => {
    const testVal = "github-test";
    const emp = new Engineer("Mossy",1, "email@email.com", testVal);
    expect(emp.getGithub()).toBe(testVal)
})