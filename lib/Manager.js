const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        //overridden to return 'Manager'
        return Manager;
    }
}