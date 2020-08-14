//list all the required packages to install
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Title",
    message: "Please give a Title that you would want to use?"
  },
  {
    type: "input",
    name: "Description",
    message: "Please give a detailed description?"
  },
  {
    type: "input",
    name: "TableofContents",
    message: "Please give the Table of Contents?"
  },
  {
    type: "input",
    name: "Installation",
    message: "Please give detailed installation steps?"
  },
  {
    type: "input",
    name: "Usage",
    message: "Please give detailed usage instructions?"
  },
  {
    type: "input",
    name: "License",
    message: "Please give License details?"
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please give Contributing details?"
  },
  {
    type: "input",
    name: "Tests",
    message: "Please give details about any tests done?"
  },
  {
    type: "input",
    name: "Questions",
    message: "Please give any questions section?"
  },
  {
    type: "input",
    name: "Badge",
    message: "Please give details about Badge that you have for this project?"
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your github username"
  },
  {
    type: "input",
    name: "email",
    message: "Please give your email address"
  }

];

// function to write README file
function writeToFile(fileName, data1, data2) {
  console.log(fileName);
  console.log(data1);
  console.log(data2);
  fs.writeFile(fileName, generate(data1, data2), function (err) {
    if (err) {
      return console.log(err);
    }

    console.log('success readme file generated!!');

  });


}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(function (output) {
      //console.log(output.username);
      const queryUrl = `https://api.github.com/users/${output.username}`;

      axios.get(queryUrl).then(function (result) {
        //console.log(result);
        //filtering the result and capturing only the items that are needed here
        const gitDetails = {
          name: result.data.name,
          email: result.data.email,
          profile: result.data.html_url
        }
        //calling write to file function to create the readme file
        writeToFile("README.md", output, gitDetails)

      })
    })

}

// function call to initialize program
init();
