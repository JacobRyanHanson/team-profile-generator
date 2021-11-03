const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates an employee object", function (){
    const employee1 = new Employee();

    expect(employee1.name).toBe("FIXME");
    expect(employee1.id).toBe(-1);
    expect(employee1.email).toBe("N/A");

    const employee2 = new Employee("John", 0, "john@gmail.com");

    expect(employee2.name).toBe("John");
    expect(employee2.id).toBe(0);
    expect(employee2.email).toBe("john@gmail.com");
});

test("gets the employee's name", function () {
    const employee = new Employee("John", 0, "john@gmail.com");

    expect(employee.getName()).toBe("John");
});

test("gets...")