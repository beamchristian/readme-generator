# Readme Generator

[![Generic badge](https://img.shields.io/badge/License-MIT-yellowgreen.svg)](https://shields.io/)

## Description

Creates a readme based on the input of the user through the command line using node.js. This will allow the user to devote more time working on their actual project instead of their readme.

## License

This application is covered under the MIT License.

## Table of Contents

- [installation](#installation)
- [Usage](#usage)
- [Video](#video)
- [License](#license)
- [Credits](#credits)

## Video

Click the link below to watch video displaying the application in use

[Video of Application in use!](https://watch.screencastify.com/v/yXvz7OWidWjNvjfTFNPt)

## Installation

- Install node.js on your machine from the following website [node.js](https://nodejs.org/en/)
  ![screencapture-nodejs-org-en-2021-10-17-18_21_05](https://user-images.githubusercontent.com/88356270/137647071-dffe0aea-e1e4-4144-9156-206d1aa0a3d7.png)

* Clone this repository into your local files by running this command in your desired directory

```md
git clone https://github.com/beamchristian/readme-generator.git
```

## Usage

After you install node.js on your machine navigate to the directory you cloned the repository under. Then open in Visual Studio Code or whatever IDE you would you like and open up the command line.
![Visual Studio Example](https://user-images.githubusercontent.com/88356270/137647410-3db7029d-505e-4d9d-8dc2-f3193dd41cb7.png)

Then type in the command line:
```md
npm install inquirer
```
(This will install the inquirer package needed)

Then type: "node index" and press enter to run the program

```md
node index
```

You will then be asked a series of questions including:

- Project Name
- Project Description
- A confirm which allows you to add installation instructions or not
- Usage Information
- A confirm which allows you to add a credit section or not
- A list of Licenses you can use on your project, which will create a badge and licensing section based on what you choose
- A confirm if you want to add a Contributing Section with the Contributer Covenant badge
- A confirm if you would like to add a test section or not
- A confirm if you would like to add a table of contents or not
- Users GitHub added to questions section
- Users Email added to questions section

Once you have completed the series of questions your README file will be created under the 'dist' directory.

## Credits

- [Node File System package](https://nodejs.org/api/fs.html)
- [Node Inquirer package](https://www.npmjs.com/package/inquirer)
- [The Contributer Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Contributing

For contributing to this project, please follow the guidelines of the:

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Questions

If there is any issues with the application please send me an email with the issue, thank you!

- [GitHub](https://github.com/beamchristian 'GitHub')
- [Email](mailto:beamchristian@yahoo.com 'Email')
