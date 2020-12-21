// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path= require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the application name?",
      },
      {
        type: "input",
        name: "description",
        message: "Description of your Program?",
      },
      {
        type: "input",
        name: "install",
        message: "How to Install Program?",
      },
      {
        type: "input",
        name: "repo",
        message: "Link to your repository?",
      },
      {
        type: "input",
        name: "usage",
        message: "How to use your Program?",
      },
      {
        type: "input",
        name: "technology",
        message: "What languages and frameworks did you use to build this program?",
      },
      {
        type: "list",
        name: "license",
        message: "What is your programs License?",
        choices: [
          "None",
          new inquirer.Separator(),
          "GNU",
          new inquirer.Separator(),
          "MIT",
          new inquirer.Separator(),
          "Apache",
        ],
      },
      {
        type: "input",
        name: "contribute",
        message: "How you can contribute?",
      },
      {
        type: "input",
        name: "username",
        message: "What is your Github Username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
    ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(data => {
    console.log(data)
    writeToFile("README.md", generateMarkdown(data))
  })
}

// Function call to initialize app
init();







// Drop into the Terminal "npm install inquirer"