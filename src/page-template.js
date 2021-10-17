const generateInstallInst = instructionsText => {
  if (!instructionsText) {
    return '';
  }
};

module.exports = templateData => {
  console.log(templateData);
  const markdown = templateData;
  return `
  #${markdown.name}

  ##${markdown.description}

  `;
};
