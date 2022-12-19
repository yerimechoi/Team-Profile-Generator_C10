const generateHTML = require('./dist/index.html');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');


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
        if (answer === `Engineer`){
            engineerQuestions();
        } else if (answer === `Intern`) {
            internQuestions();
        } else {
            teamGenerator();
        }
    })
}

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
        addTeam();
    })
};
