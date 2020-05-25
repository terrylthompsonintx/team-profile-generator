const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');




/* Psuedo Code
Program launches funciton to prompt user for input.  
Inguirer asks a serires of questions and creates employee object. 

object is pushed to array.  

Repeat as user prompts.

Once all input is pushed to array new function 
reads html hearder 
creates new index.html string
interates through array and create new html and appends to index.html string
Once we are at the end of the array function appends footer to index.html.
String is written to file.  
User message done.  
*/
var team = [];
var notdone = false;
var protoObj ={};
var manageObj = {};
var engineerObj = {};
var internObj = {};
var aManager = {}

const promptUser = function(){
    var employeeData = inquirer.prompt([
        { 
            type: 'input',
            name: 'eName',
            message: 'Please enter employee name:',
            validate: function(value){
                if (value !== ''){
                    return true;
                }
            }
        },
        { 
            type: 'input',
            name: 'eId',
            message: 'Please enter employee id:',
            validate: function(value){
                if (value !== ''){
                    return true;
                }
            }
        },
        { 
            type: 'input',
            name: 'email',
            message: 'Please enter employee email:',
            validate: function(value){
                if (value !== ''){
                    return true;
                }
            }
        },
        { 
            type: 'list',
            name: 'role',
            message: 'Select employee role:',
            choices: ['Manager', 'Intern', 'Engineer']
        },

    ]);
    return employeeData
}

const promptEngineer = function(){
    let engineerData = inquirer.prompt([
        { 
            type: 'input',
            name: 'github',
            message: 'Please enter GitHub name.',
            validate: function(value){
                if (value !== ''){
                    return true;
                }
            }
        },
        { 
            type: 'confirm',
            name: 'loopconfirm',
            message: 'Add another empployee?',
        }
    ]);
    return (engineerData)   
}

const promptManager = function(){

    let managerData = inquirer.prompt([
        { 
            type: 'input',
            name: 'phone',
            message: 'Please enter phone number.',
            validate: function(value){
                if (value !== ''){
                    return true;
                }
            }
        },
        { 
            type: 'confirm',
            name: 'loopconfirm',
            message: 'Add another empployee?',
        }
    ]);
    return(managerData);
}

const promptIntern = function(){
    let internData = inquirer.prompt([
        { 
            type: 'input',
            name: 'school',
            message: 'Please enter school.',
            validate: function(value){
                if (value !== ''){
                    return true;
                }
            }
        },
        { 
            type: 'confirm',
            name: 'loopconfirm',
            message: 'Add another empployee?',
        }

    ]);
    return (internData) 
}

const paint = function(){
    
}

promptUser()
.then(function(data){
    if (data.role ==='Manager'){
        promptManager().then(function(mdata){
            aManager = new Manager(data.name,data.eId,data.email, mdata.phone);
            team.push(aManager)
        }).then(function(){})
        
    }
    else if (data.role ==='Engineer'){
         promptEngineer().then(function(edata){
            aEngineer = new Engineer(data.name,data.eId,data.email, edata.github);
            team.push(aEngineer)
        }).then(function(){})
    }
    else if (data.role ==='Intern'){
        promptIntern().then(function(idata){
            aIntern = new Intern(data.name,data.eId,data.email, idata.school);
            team.push(aIntern)
        }).then(function(){})
    }

}).catch(function(err){console.log(err)});














  





 














