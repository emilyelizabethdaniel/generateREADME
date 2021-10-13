// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
    let chosenLicense = license;
    const CCOBadge = "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)(http://creativecommons.org/publicdomain/zero/1.0/)";
    const MITBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)"
    const apacheBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)";
    const IMBBadge = "";
    const ISCBadge = "";
    const mozillaBadge = "";
    const perlBadge = "";
    const eclipseBadge = "";


    if (chosenLicense === 'CCO') {
        return `${CCOBadge}`
    } else if (chosenLicense === 'MIT') {
        return `${MITBadge}`
    } else if (chosenLicense === 'Apache') {
        return `${apacheBadge}`
    } else if (chosenLicense === 'IBM') {
        return `${IMBBadge}`
    } else if (chosenLicense === 'ISC') {
        return `${ISCBadge}`
    } else if (chosenLicense === 'Mozilla') {
        return `${mozillaBadge}`
    } else if (chosenLicense === 'Pearl') {
        return `${perlBadge}`
    } else if (chosenLicense === 'Eclipse') {
        return `${eclipseBadge}`

    } else if (chosenLicense === 'None') {
        return "";
    };

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
![image description or alt text](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
    
## Description
${description}
Provide a short description explaining the what, why, and how of your project.
   
## Table of Contents 
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
${renderLicense(license)}

This lets other developers know what they can and cannot do with your project.

## Questions
${github}
${email}
## Tests
${tests}
`
}

module.exports = generateMarkdown;