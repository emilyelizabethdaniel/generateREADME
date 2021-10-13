////////////////////////////////////////////////////////////////////

//required packages//

///////////////////////////////////////////////////////////////////

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');


function init() {
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
        });
    }

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
                type: 'input',
                message: 'usage',
                name: 'usage'
            },
            {
                type: 'list',
                message: 'What license are you using?',
                name: 'license',
                choices: ['CCO', 'MIT', 'Apache', 'IBM', 'ISC', 'Mozilla', 'Perl', 'Eclipse', 'None']
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
        const generatedReadMe = generateMarkDown(response);
        console.log(generatedReadMe);
        writeToFile("generatedREADME.md", generatedReadMe);

    });
};

init();