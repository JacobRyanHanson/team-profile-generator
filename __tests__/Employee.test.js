const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates an employee object", function (){
    const employee1 = new Employee();
    expect(employee1.name).toBe("ERROR");
    expect(employee1.id).toBe(-1);
    expect(employee1.email).toBe("ERROR");

    const employee2 = new Employee("John", "john@gmail.com", 0);
    expect(employee2.name).toBe("John");
    expect(employee2.id).toBe(0);
    expect(employee2.email).toBe("john@gmail.com");
});

test("gets the employee's name", function () {
    const employee1 = new Employee();
    expect(employee1.getName()).toBe("ERROR");
    
    const employee2 = new Employee("John");
    expect(employee2.getName()).toBe("John");
});

test("gets the employee's email", function () {
    const employee1 = new Employee();
    expect(employee1.getEmail()).toBe("ERROR"); 

    const employee2 = new Employee("", "john@gmail.com");
    expect(employee2.getEmail()).toBe("john@gmail.com");
});

test("gets the employee's id", function () {
    const employee1 = new Employee();
    expect(employee1.getId()).toBe(-1);
    
    const employee = new Employee("", "", 0);
    expect(employee.getId()).toBe(0);
}); 

test("gets the employee's role - ONLY DEFINED FOR POLYMORPHISM / SHOULD NOT BE CALLED", function () {
    const employee = new Employee();
    expect(employee.getRole()).toBe("ERROR");
});