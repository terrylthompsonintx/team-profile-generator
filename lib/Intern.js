const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name,id,email,role,school) {
      // call parent constructor here:
        super(name,id,email,role);
        this.school = school;
    }  
   getschool(){
       return this.school;
   };
   getRole(){
       return 'Intern';
   }
  }
    
module.exports = Intern;