const fs = require("fs");
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Give a brief description of your project:',
            name: 'projectDesc',
        },
        {
            type: 'input',
            message: 'What are your installation instructions for this project?',
            name: 'installationInstructions',
        },
        {
            type: 'input',
            message: 'Describe the usage information of your project:',
            name: 'usageInformation',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines for your project?',
            name: 'contributionGuidelines',
        },
        {
            type: 'input',
            message: 'What are the test instructions for your project?',
            name: 'testInstructions',
        },
        {
            type: 'list',
            message: 'Which license does your project use?',
            name: 'license',
            choices: [
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU Lesser General PublicLicense v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense"
            ]
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitHubUsername',
        },
        {
            type: 'input',
            message: 'What is the name of your GitHub repository?',
            name: 'gitHubRepoName',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'emailAddress',
        },
    ])
    .then((response) => {
        const readmeText = `
# ${response.projectTitle}\n
![GitHub License](https://img.shields.io/github/license/${response.gitHubUsername}/${response.gitHubRepoName})
 ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/${response.gitHubUsername}/${response.gitHubRepoName})
 [![GitHub issues](https://img.shields.io/github/issues/${response.gitHubUsername}/${response.gitHubRepoName})](https://github.com/${response.gitHubUsername}/${response.gitHubRepoName}/issues)
 [![GitHub stars](https://img.shields.io/github/stars/${response.gitHubUsername}/${response.gitHubRepoName})](https://github.com/${response.gitHubUsername}/${response.gitHubRepoName}/stargazers)\n
## Description\n
${response.projectDesc}\n
---\n
## Table of Contents\n
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)\n
---\n

## Installation\n
\`\`\`
${response.installationInstructions}\n
\`\`\`
---\n
## Usage\n
${response.usageInformation}\n
---\n
## License\n
Licensed under the [${response.license}](./LICENSE).\n
---\n
## Contributing\n
${response.contributionGuidelines}\n
---\n
## Tests\n
\`\`\`
${response.testInstructions}\n
\`\`\`
---\n
## Questions\n
Please check out my [GitHub](https://github.com/${response.gitHubUsername}) profile to see what else I've been working on!\n
You can also reach me at the following email address if you have further questions: ${response.emailAddress}
`;

        fs.writeFile("test.md", readmeText, (err) =>
            err ? console.error(err) : console.log('Readme File Created!'));
    }
    );

