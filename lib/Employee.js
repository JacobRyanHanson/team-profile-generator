class Employee {
    constructor(name = "ERROR", email = "ERROR", id = -1) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return "ERROR"
    }
}

module.exports = Employee;