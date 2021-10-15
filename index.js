//importing packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');
//storing employee info from prompts
let employeeArr = [];
let finalHTML = ``;
const questions = {
    managerName: `What is the manager's name?`,
    employeeID: `What is the employee's ID?`,
    email: `What is the employee's email?`,
    officeNumber: `What is the office number?`,
    github: `What is the GitHub ID of the engineer?`,
    school: `What school does the intern attend?`,
    employeeType: `Would you like to add an engineer, an intern, or finish building your team?`
};
// prompting user for information

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: questions.managerName
        },
        {
            type: 'input',
            name: 'managerID',
            message: questions.employeeID
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: questions.email
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: questions.officeNumber
        },
        {
            // This question is only asked when the license question is selected as yes
            type: 'list',
            name: 'employees',
            message: 'What kind of employee do you want to add to the team?',
            choices: ['Engineer', 'Intern', 'Finished adding teammate']
        },

    ]).then((answers) => {
        console.log('')
    });
};
// function to initialize app
const init = () => {
    promptUser()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('./output/index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};
// function that renders info
const render = () => {

}

// Function call to initialize app
init();