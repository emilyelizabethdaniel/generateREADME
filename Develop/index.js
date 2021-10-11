// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown')

console.log(generateMarkDown.color);
// TODO: Create an array of questions for user input
inquirer.prompt(
    [{
            type: 'input',
            message: 'what is your read me title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'description',
            name: 'description'
        },
        {
            type: 'checkbox',
            message: 'table of contents',
            name: 'table',
            choices: ['title', 'description', 'table of contents', 'installation', 'license', 'contributing', 'tests', 'questions']
        },
        {
            type: 'input',
            message: 'installation instructions',
            name: 'installation'
        },
        {
            type: 'list',
            message: 'What license are you using?',
            name: 'license',
            choices: ['CCO', 'MIT', 'apache', 'MPL', 'GPL', 'AGPL', 'JRL', 'AFPL', 'Proprietary license', 'Trade secrets']
        },
        {
            type: 'input',
            message: 'contributing',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'tests',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'what is your github url?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'what is your email?',
            name: 'email'
        }
    ]
)

.then((response) => {
    var title = response.title;
    console.log(title);
    var description = response.description;
    var tableOfContents = response.table;
    var installation = response.installation;
    var license = response.installation;
    var contributing = response.contributing;
    var tests = response.tests;
    var github = response.github;
    var email = response.email;
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();