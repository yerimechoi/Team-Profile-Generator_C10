
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

let finalHTMLString = '';

function startHTML(){
    return `
    <!DOCTYPE html>
    <html lang=“en-US”>
    <head>
        <meta charset="UTF-8"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar bg-dark">
            <div class="container-fluid justify-content-center">
                <div class="navbar-brand m-3 text-light">
                    <h3>My Team</h3>
                </div>
            </div>
        </nav>

        <main>`
};

function managerQuestions(){
    return inquirer
    .prompt([
      { 
        type: `input`,
        message: `What is your team manager's name?`,
        name: `managerName`
      },
      { 
        type: `input`,
        message: `What is your team manager's employee ID?`,
        name: `managerID`
      },
      { 
        type: `input`,
        message: `What is your team manager's email address?`,
        name: `managerEmail`
      },
      { 
        type: `input`,
        message: `What is your team manager's office number?`,
        name: `managerOfficeNumber`
      },
    ])
    .then((answer) => {
        const manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber);
        let managerHTMLString = teamGenerator(manager);
        finalHTMLString = finalHTMLString + managerHTMLString;
        addTeam();
    })
};

function addTeam(){
    return inquirer
    .prompt([
        {
            type: `list`,
            message: `Pick to add more teammates to your team or 'No more' to finish building your team.`,
            name: `otherTeammates`,
            choices: [`Engineer`, `Intern`, `No more`],
          },
    ])
    .then((answer) => {
        if (answer.otherTeammates === `Engineer`){
            engineerQuestions();
        } else if (answer.otherTeammates === `Intern`) {
            internQuestions();
        } else if (answer.otherTeammates === `No more`){
            generateHTML();
        }
    })
};

function engineerQuestions(){
    return inquirer
    .prompt([
        { 
            type: `input`,
            message: `What is your team engineer's name?`,
            name: `engineerName`
        },
        { 
            type: `input`,
            message: `What is your team engineer's employee ID?`,
            name: `engineerID`
        },
        { 
            type: `input`,
            message: `What is your team engineer's email address?`,
            name: `engineerEmail`
        },
        { 
            type: `input`,
            message: `What is your team engineer's GitHub username?`,
            name: `engineerUsername`
        },
    ])
    .then((answer) => {
        const engineer = new Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, answer.engineerUsername);
        let engineerHTMLString = teamGenerator(engineer);
        finalHTMLString = finalHTMLString + engineerHTMLString;
        addTeam();
    })
};

function internQuestions(){
    return inquirer
    .prompt([
        { 
            type: `input`,
            message: `What is your team intern's name?`,
            name: `internName`
        },
        { 
            type: `input`,
            message: `What is your team intern's employee ID?`,
            name: `internID`
        },
        { 
            type: `input`,
            message: `What is your team intern's email address?`,
            name: `internEmail`
        },
        { 
            type: `input`,
            message: `Which school does your team intern study at?`,
            name: `internSchool`
        },
    ])
    .then((answer) => {
        const intern = new Intern(answer.internName, answer.internID, answer.internEmail, answer.internSchool);
        let internHTMLString = teamGenerator(intern);
        finalHTMLString = finalHTMLString + internHTMLString;
        addTeam();
    })
};

function teamGenerator(employeeObject){
    return `<div class="container mt-5">
    <div class="row card col-4">
        <div class="card-body bg-secondary text-light">
            <h4>Name : ${employeeObject.getName()}</h4>
            <h5>Role : ${employeeObject.getRole()}</h5>
        </div>
        <ul class="card-body list-group px-3 py-4 bg-light">
            <li class="list-group-item">${employeeObject.getId()}</li>
            <li class="list-group-item">${employeeObject.getEmail()}</li>
            ${employeeObject.getRole() === "Manager" ? `<li class="list-group-item">${employeeObject.getOfficeNumber()}</li>` : ''}
            ${employeeObject.getRole() === "Engineer" ? `<li class="list-group-item">${employeeObject.getGithub()}</li>` : ''}
            ${employeeObject.getRole() === "Intern" ? `<li class="list-group-item">${employeeObject.getSchool()}</li>` : ''}
            
        </ul>
    </div>
    </div>`
};

function init(startfunc){
    let startHTML = startfunc()
    finalHTMLString = finalHTMLString + startHTML
    managerQuestions();
}

function generateHTML(){
    let footerHTML = 
    `   </main>
        </body>
    </html>`

    finalHTMLString = finalHTMLString + footerHTML
    fs.writeFile('./dist/index.html', finalHTMLString, function(err){
        if(err){
            console.log(err);
    }
    console.log("html generated successfully!");
})};

init(startHTML);
