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
let team = []

const addManager = [
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
    }
]

function init () {
    inquirer.prompt(addManager)
}

init()

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
//return to menu
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
    //return to menu
}

