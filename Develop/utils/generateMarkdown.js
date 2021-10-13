// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `you chose license ${license}`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

    var title = data.title;
    var description = data.description;
    var table = data.table;
    var install = data.installation;
    var license = data.license;
    var contributing = data.contributing;
    var tests = data.tests;
    var github = data.github;
    var email = data.email;

    return `# ${title}
## Badges
![image description or alt text](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
    
## Description
${description}
Provide a short description explaining the what, why, and how of your project.
   
##Table of Contents 
${table}
    
## Installation Instructions
${install}
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
   
## Usage
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create a folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
   
## Credits
${contributing}
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party asset that requir attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
## License
${renderLicenseBadge(license)}
The last section of a high-quality README file is the ${license}.

This lets other developers know what they can and cannot do with your project.
   
## Questions
${github}
${email}
##Tests
${tests}
`
}

module.exports = generateMarkdown;