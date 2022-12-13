const Employee = require("./Employee");

class Intern extends Intern {
    constructor(school) {
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        //overridden to return 'Intern'
        return Intern;
    }
}