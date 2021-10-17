// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const pageMarkdown = require('./src/page-template.js');
// const generateMarkdown = require('./src/page-template.js');

// function to display prompt's to user
const promptQuestions = () => {
  return inquirer.prompt([
    // project Name
    {
      type: 'input',
      name: 'name',
      message: "What is your project's name?",
    },
    // project description
    {
      type: 'input',
      name: 'description',
      message: 'Provide a desription of your project.',
    },
    // installation instructions
    {
      type: 'confirm',
      name: 'installation',
      message: 'Would you like to provide installation instructions?',
      default: false,
    },
    // usage information
    {
      type: 'input',
      name: 'usage',
      message: 'Provide Usage information',
    },
    // (licensing)
    {
      type: 'list',
      name: 'licensing',
      message: 'What license would you like to use for your project?',
      choices: [
        'Apache 2.0',
        'GNU General Public License(GPL)',
        'BSD 2-Clause',
        'MIT',
        'Mozilla Public 2.0',
        'Common Development and Distribution',
        'Eclipse Public version 2.0',
      ],
    },
    // contribution
    {
      type: 'confirm',
      name: 'contribution',
      message:
        'Would you like other developers to be able to contribute to your project?',
      default: false,
    },
    // tests
    {
      type: 'confirm',
      name: 'test',
      message: "Would you like to provide test case's in you readme?",
      default: false,
    },
    // github username
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    // email address
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ]);
};

promptQuestions().then(answers => console.log(answers));
// TODO: Create a function to initialize app

// Function call to initialize app

// fs.writeFile('README.md', init(name, description), err => {
//   if (err) throw err;

//   console.log('Readme Generated Successfully!');
// });

// generateMarkdown();
