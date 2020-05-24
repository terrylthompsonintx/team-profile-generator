const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name,id,email,__github) {
      // call parent constructor here:
      super(name,id,email);
        this.github =__github;
    }  
    gethub(){
        return this.github;
    }
    getrole(){
    return 'Engineer';
    }


  }
  module.exports = Engineer;