function renderLicense(license) {
    let chosenLicense = license;
    const CCOBadge = "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)(http://creativecommons.org/publicdomain/zero/1.0/)";
    const MITBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)"
    const apacheBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)";
    const IMBBadge = "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)(https://opensource.org/licenses/IPL-1.0)";
    const ISCBadge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)(https://opensource.org/licenses/ISC)";
    const mozillaBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)";
    const perlBadge = "License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)(https://opensource.org/licenses/Artistic-2.0)";
    const eclipseBadge = "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)(https://opensource.org/licenses/EPL-1.0)";


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

    } else if (chosenLicense === 'Not Specified') {
        return "";
    };

};

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
    var usage = data.usage;

    return `# ${title}

    
## Description
${description}

## Table of Contents 
${table}
    
## Installation Instructions
${install}
   
## Usage
${usage}
## Credits
${contributing} 

## License
${renderLicense(license)}

## Questions
${github}
${email}

## Tests
${tests}
`
}

module.exports = generateMarkdown;