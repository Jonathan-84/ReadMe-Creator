// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const questions = [] => inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the application name?",
      },
      {
        type: "editor",
        name: "description",
        message: "Description of your Program?",
      },
      {
        type: "editor",
        name: "tableofcontents",
        message: "Table of Contents?",
      },
      {
        type: "editor",
        name: "install",
        message: "How to Install Program?",
      },
      {
        type: "input",
        name: "repo",
        message: "Link to your repository?",
      },
      {
        type: "editor",
        name: "usage",
        message: "How to use your Program?",
      },
      {
        type: "list",
        name: "license",
        message: "What is your programs License?",
        choices: [
          "GNU",
          new inquirer.Separator(),
          "MIT",
          new inquirer.Separator(),
          "Apache",
        ],
      },
      {
        type: "editor",
        name: "contribute",
        message: "How you can contribute?",
      },
      {
        type: "input",
        name: "video",
        message: "Video Link?",
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
    ]);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();







// Drop into the Terminal "npm install inquirer"