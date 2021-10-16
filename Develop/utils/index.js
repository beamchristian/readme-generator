// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const dataArgs = process.argv.slice(2, process.argv.length);
const [name, description] = dataArgs;

// function to display prompt's to user
// const questions = () => {
//   return inquirer.prompt([
//     // project Name
//     {
//       type: 'input',
//       name: 'name',
//       message: "What is your project's name?",
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('Please enter a name!');
//           return false;
//         }
//       },
//     },
//     // project description
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Provide a desription of your project.',
//       validate: descriptionInput => {
//         if (descriptionInput) {
//           return true;
//         } else {
//           console.log('Please provide a description for your project!');
//         }
//       },
//     },
//     // installation instructions
//     {},
//     // Usage Information (licensing)
//     {},
//     // contribution
//     {},
//     // tests
//     {},
//     // github username
//     {},
//     // email address
//     {},
//     // how to reach me with additional questions
//     {},
//   ]);
// };

// TODO: Create a function to initialize app
const init = (projectName, projectDescription) => {
  return `
  # ${projectName}
  ## ${projectDescription}
  `;
};
fs.writeFile('README.md', init(name, description), err => {
  if (err) throw err;

  console.log('Readme Generated Successfully!');
});

// Function call to initialize app
init();
