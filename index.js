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
var add = false;


var htmlhead  = fs.readFileSync('./dist/head.txt', "utf8");
var htmlend  = fs.readFileSync('./dist/end.txt', "utf8");
//console.log (htmlhead);

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
    //console.log ( team);
    let card = '';
    var thestring = htmlhead;
    for (i=0;i<team.length;i++){
        card += '<div class= "card" style = "width: 25%"><div class="card-header"> <h1>' + team[i].name +'</h1>';
        if (team[i].role == 'Manager'){
            card += '<img src ="./assets/images/manager.jpg"> <h2> ' + team[i].role + '</h2> </div>';
            card += '<div class = "card-body"<ul><li> Id:' + team[i].id +"</li><li>Email:" + team[i].email + "</li><li> Phone:" + team[i].number + "</li></ul></div>";

        }else if (team[i].role == 'Engineer'){
            card += '<img src ="./assets/images/engineer.jpg"> <h2> ' + team[i].role + '</h2> </div>';
            
            card += '<div class = "card-body"<ul><li> Id:' + team[i].id +"</li><li> Email:" + team[i].email + "</li><li> Github:" + team[i].github + "</li></ul></div>";
        }
        else if ( team[i].role == 'Intern'){
            card += '<img src ="./assets/images/intern.jpg"> <h2> ' + team[i].role + '</h2> </div>';
            card += '<div class = "card-body"<ul><li> Id:' + team[i].id +"</li><li>Email:" + team[i].email + "</li><li> School:" + team[i].school + "</li></ul></div>";

        }
        thestring += card;
    }
    thestring += htmlend;
    //console.log (thestring);

    fs.writeFile('./src/index.html',thestring, err =>{if (err) throw err;}) 
}

promptUser()
.then(function(data){
    if (data.role ==='Manager'){
        promptManager().then(function(mdata){
            aManager = new Manager(data.eName,data.eId,data.email, 'Manager', mdata.phone);
            team.push(aManager);
            //console.log(mdata);
            add = mdata.loopconfirm;
            
        }).then(function(){if(add){promptUser()}}).then(function(){paint()});
        
    }
    else if (data.role ==='Engineer'){
         promptEngineer().then(function(edata){
            aEngineer = new Engineer(data.eName,data.eId,data.email,'Engineer', edata.github);
            team.push(aEngineer)
        }).then(function(){if(add){promptUser()}}).then(function(){paint()});
    }
    else if (data.role ==='Intern'){
        promptIntern().then(function(idata){
            aIntern = new Intern(data.eName,data.eId,data.email,'Intern', idata.school);
            team.push(aIntern)
        }).then(function(){if(add){promptUser()}}).then(function(){paint()});
    }

}).catch(function(err){console.log(err)});














  





 














