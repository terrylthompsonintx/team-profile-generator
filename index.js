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
const promptUser = function(){
    var employeeData = inquirer.prompt([
        { 
            type: 'input',
            name: 'fName',
            message: 'Please enter first name:',
            validate: function(value){
                if (value !== ''){
                    return true;
                }
            }
        },
        { 
            type: 'input',
            name: 'lName',
            message: 'Please enter last name:',
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
            type: 'list',
            name: 'role',
            message: 'Select employee role:',
            choices: ['Manager', 'Intern', 'Engineer']
        }

    ]);
        return(employeeData);
}



promptUser().then(function(data){
    console.log(data);
    
 })
 .catch(function(err){console.log(err)});





