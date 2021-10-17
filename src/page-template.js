// Function for if user chooses to display installation instructions or not
const generateInstallInst = instructionsText => {
  if (!instructionsText) {
    return '';
  }

  return `
## Installation

${instructionsText}
`;
};
// Function to display if user wants to display contributing rules in markdown
const generateContribution = contributionText => {
  if (!contributionText) {
    return '';
  }

  return `
## Contributing

For contributing to this project, please follow the guidelines of the:

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
`;
};
// function to display table of contents or not
const generateTable = tableText => {
  if (!tableText) {
    return '';
  }

  return `
## Table of Contents

* [installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Credits](#credits)
`;
};
// function to generate credits section or not
const generateCredits = creditText => {
  if (!creditText) {
    return '';
  }

  return `
## Credits

${creditText}
`;
};

const generateTests = testsText => {
  if (!testsText) {
    return '';
  }

  return `
## Tests
${testsText}
`;
};

// template to generate markdown
module.exports = templateData => {
  console.log(templateData);
  const markdown = templateData;
  return `
# ${markdown.name}

[![Generic badge](https://img.shields.io/badge/License-${
    markdown.licensing
  }-yellowgreen.svg)](https://shields.io/)

## Description
${markdown.description}

## License
 
This application is covered under the ${markdown.licensing} License.

${generateTable(markdown.confirmTable)}

${generateInstallInst(markdown.instructions)}

## Usage

${markdown.usage}

${generateCredits(markdown.credit)}

${generateContribution(markdown.confirmContribution)}

${generateTests(markdown.test)}

## Questions

 - [GitHub](https://github.com/${markdown.github} "GitHub")
 - [Email](mailto:${markdown.email} "Email")
`;
};
