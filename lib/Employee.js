class Employee {
    constructor(name = "ERROR", email = "ERROR", id = -1) {
        this.name = name;
        this.email = email;
        this.id = id;
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