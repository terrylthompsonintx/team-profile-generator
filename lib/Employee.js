class Employee {
    constructor(name,id,email,role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
getname(){
  return this.name

}
getid(){
  return this.id

}
getemail(){
  return this.email

}
getrole(){
  return this.role

}



}    
module.exports = Employee;