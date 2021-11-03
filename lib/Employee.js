class Employee {
    constructor(name = "FIXME", id = -1, email = "N/A") {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;