const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')

const badges = {
 'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
 'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
 'GPL v2': '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
}

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your README'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a description of the application'
    },
    {
     type: 'input',
     name: 'installation',
     message: 'What are the steps used in order to install the application?' 
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What use does this application have?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which licenses were used?',
      choices: ['MIT', 'GPL v2', 'Apache 2.0']
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Who contributed to this project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How was the application tested?'
    },
    {
      type: 'input',
      name: 'github',
      message:'what is you github username?'
    },
  {
    type: 'input',
    name: 'email',
    message: 'what is you email?'
  }
  ]



// function to write README file
function writeToFile(fileName, data) {
  data.badges = badges[data.license]

  fs.writeFile(fileName, generateMarkdown(data), err =>{
    if (err) {console.log(err)}
  })
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then (answers =>{
    writeToFile('README.md', answers)
  }).catch(err => console.log(err))
}

// function call to initialize program
init();
