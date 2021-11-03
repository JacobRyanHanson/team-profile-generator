const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", function () {
    const engineer1 = new Engineer();
    expect(engineer1.name).toBe("ERROR");
    expect(engineer1.id).toBe(-1);
    expect(engineer1.email).toBe("ERROR");
    expect(engineer1.github).toBe("ERROR");

    const engineer2 = new Engineer("John", "john@gmail.com", 0, "OctoJohn");
    expect(engineer2.name).toBe("John");
    expect(engineer2.id).toBe(0);
    expect(engineer2.email).toBe("john@gmail.com");
    expect(engineer2.github).toBe("OctoJohn");
});

test("gets the engineer's github username", function () {
    const engineer1 = new Engineer();
    expect(engineer1.getGithub()).toBe("ERROR");

    const engineer2 = new Engineer("", "", 0, "OctoJohn");
    expect(engineer2.getGithub()).toBe("OctoJohn");
});

test("gets the engineer's role", function () {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe("Engineer");
});