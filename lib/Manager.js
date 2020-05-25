const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name,id,email,number) {
        // call parent constructor here:
          super(name,id,email);
          this.number = number;
      } 
    getRole(){
        return 'Manager';
    }
  }
    
module.exports = Manager;