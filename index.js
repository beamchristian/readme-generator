// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const pageMarkdown = require('./src/page-template.js');
// const generateMarkdown = require('./src/page-template.js');

// function to display prompt's to user
const promptQuestions = () => {
  return inquirer.prompt([
    // project Name
    {
      type: 'input',
      name: 'name',
      message: "What is your project's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a project name!');
          return false;
        }
      },
    },
    // project description
    {
      type: 'input',
      name: 'description',
      message: 'Provide a desription of your project.',
      validate: descInput => {
        if (descInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      },
    },
    // installation instructions
    {
      type: 'confirm',
      name: 'confirmInstructions',
      message: 'Would you like to provide installation instructions?',
      default: false,
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Provide installation instructions:',
      when: ({ confirmInstructions }) => {
        if (confirmInstructions) {
          return true;
        } else {
          return false;
        }
      },
    },
    // usage information
    {
      type: 'input',
      name: 'usage',
      message: 'Provide Usage information:',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide usage information!');
          return false;
        }
      },
    },
    // Credits
    {
      type: 'confirm',
      name: 'confirmCredit',
      message: 'Would you like to add a credit section to your readme?',
    },
    {
      type: 'input',
      name: 'credit',
      message:
        'List your credits (collaborators, third party assets used, tutorials, ect)',
      when: ({ confirmCredit }) => {
        if (confirmCredit) {
          return true;
        } else {
          return false;
        }
      },
    },
    // (licensing)
    {
      type: 'list',
      name: 'licensing',
      message: 'What license would you like to use for your project?',
      choices: [
        'Apache(2.0)',
        'GNU(GPL)',
        'BSD(2Clause)',
        'BSD(3Clause)',
        'MIT',
        'Mozilla(Public)(2.0)',
        'Eclipse(2.0)',
      ],
    },
    // contribution
    {
      type: 'confirm',
      name: 'confirmContribution',
      message:
        'Would you like to add a code of conduct about contributing to your project?',
      default: false,
    },
    // tests
    {
      type: 'confirm',
      name: 'confirmTest',
      message: "Would you like to provide test case's in you readme?",
      default: false,
    },
    {
      type: 'input',
      name: 'test',
      message: "Provide your test case's:",
      when: ({ confirmTest }) => {
        if (confirmTest) {
          return true;
        } else {
          return false;
        }
      },
    },
    // table of contents confirm
    {
      type: 'confirm',
      name: 'confirmTable',
      message: 'Would you like to add a table of contents?',
    },
    // github username
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      },
    },
    // email address
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      },
    },
  ]);
};

// intialize prompt function
promptQuestions().then(answers => {
  console.log(answers);
  const createMarkdown = pageMarkdown(answers);
  fs.writeFile('README.md', createMarkdown, err => {
    if (err) throw new Error(err);
    console.log('Readme Generated Successfully!');
  });
});
