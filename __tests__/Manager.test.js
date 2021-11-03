const Manager = require("../lib/Manager.js");

test("creates a manager object", function () {
    const manager1 = new Manager();
    expect(manager1.name).toBe("ERROR");
    expect(manager1.id).toBe(-1);
    expect(manager1.email).toBe("ERROR");
    expect(manager1.officeNumber).toBe(-1);

    const manager2 = new Manager("John", "john@gmail.com", 0, 100);
    expect(manager2.name).toBe("John");
    expect(manager2.id).toBe(0);
    expect(manager2.email).toBe("john@gmail.com");
    expect(manager2.officeNumber).toBe(100);
});

test("gets the manager's office number", function() {
    const manager1 = new Manager();
    expect(manager1.getOfficeNumber()).toBe(-1);

    const manager2 = new Manager("", "", 0, 100);
    expect(manager2.getOfficeNumber()).toBe(100);
});

test("gets the manager's role", function() {
    const manager = new Manager();
    expect(manager.getRole()).toBe("Manager");
});