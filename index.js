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
        message: 'What are the contribution guidelines for your project:',
        name: 'contributionGuidelines',
      },
      {
        type: 'input',
        message: 'What are the test instructions for your project:',
        name: 'testInstructions',
      },
  ])
  .then((response) => {
      console.log(`Project Title: ${response.projectTitle}`);
      console.log(`Project Description: ${response.projectDesc}`);
      console.log(`Installation Instructions: ${response.installationInstructions}`);
      console.log(`Usage Information: ${response.usageInformation}`);
      console.log(`Contribution Guidelines: ${response.contributionGuidelines}`);
      console.log(`Test Instructions: ${response.testInstructions}`);
    }
  );

