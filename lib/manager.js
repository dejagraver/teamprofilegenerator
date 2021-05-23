const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        // GitHub username
        this.officeNumber = github;
    
    }
       // Overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }

};

module.exports = Manager; 