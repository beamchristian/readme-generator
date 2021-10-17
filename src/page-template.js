const generateMarkdown = (projectName, projectDescription) => {
  return `
  # ${projectName}
  ## ${projectDescription}
  `;
};

module.exports = generateMarkdown;
