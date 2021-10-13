//importing packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');
let employeeArr = [];
const questions = {
        managerName: `What is the manager's name?`,
        employeeID: `What is the employee's ID?`,
        email: `What is the employee's email?`,
        officeNumber: `What is the office number?`,
        github: `What is the GitHub ID of the engineer?`,
        school: `What school does the intern attend?`,
        employeeType: `Would you like to add an engineer, an intern, or finish building your team?`
    }
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
            type: 'confirm',
            name: 'license',
            message: questions.employeeType,
            default: false
        },
        {
            // This question is only asked when the license question is selected as yes
            type: 'list',
            name: 'licenseType',
            message: 'Which license would you like to use?',
            choices: ['MIT', 'Apache 2.0', 'GNU General Public License v3.0'],
            when: (answers) => answers.license
        },

    ]);
};
// function to initialize app
const init = () => {
    promptUser()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('./output/index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();