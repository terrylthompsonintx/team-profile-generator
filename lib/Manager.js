const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name,id,email,role,number) {
        // call parent constructor here:
          super(name,id,email,role);
          this.number = number;
      } 
    getRole(){
        return 'Manager';
    }
  }
    
module.exports = Manager;