const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        //overridden to return 'Engineer'
        return Engineer;
    }
}