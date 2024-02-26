const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const team = []

const addManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the team manager?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the employee Id for the team manager?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the email address for the team manager?'
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is the office number for the team manager?'
    },
])
.then(input => {
    const manager = new Manager(input.managerName, input.managerId, input.managerEmail, input.managerOfficeNumber)
    team.push(manager)
    addTeamMember()
})
}
addManager()

function addTeamMember(){
    return inquirer.prompt([
        {
            type: 'list',
            name:  'teamMember',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', 'Finish building the team']
        }
    ])
    .then(answer => {
        switch(answer.teamMember) {
            case 'Engineer': 
            addEngineer();
            break;
        case 'Intern':
            addIntern();
            break;
        case 'Finish building the team':
            finishTeam()
        }
    })
}

function addEngineer() {
inquirer.prompt([
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the engineer?'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the employee Id for the engineer?'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the email address for the engineer?'
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the Github username for the engineer?'
    }
])
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of the intern?'
        },
        {
            type: 'input',
            name: 'internName',
            message: 'What is the employee Id for the intern?'
        },
        {
            type: 'input',
            name: 'internName',
            message: 'What is the email address for the intern?'
        },
        {
            type: 'input',
            name: 'internName',
            message: 'What is the school name for the intern?'
        }
    ])
}

function finishTeam () {

}