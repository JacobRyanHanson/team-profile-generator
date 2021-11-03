const Intern = require("../lib/Intern.js");

test("creates an intern object", function () {
    const intern1 = new Intern();
    expect(intern1.name).toBe("ERROR");
    expect(intern1.id).toBe(-1);
    expect(intern1.email).toBe("ERROR");
    expect(intern1.school).toBe("ERROR");

    const intern2 = new Intern("John", "john@gmail.com", 0, "UWM");
    expect(intern2.name).toBe("John");
    expect(intern2.id).toBe(0);
    expect(intern2.email).toBe("john@gmail.com");
    expect(intern2.school).toBe("UWM");
});

test("gets the intern's school", function () {
    const intern1 = new Intern();
    expect(intern1.getSchool()).toBe("ERROR");

    const intern2 = new Intern("", "", 0, "UWM");
    expect(intern2.getSchool()).toBe("UWM");
});

test("gets the intern's role", function () {
    const intern = new Intern();
    expect(intern.getRole()).toBe("Intern");
});