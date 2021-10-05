//importing packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');

// prompting user for information
const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: questions.title
        },
        {
            type: 'input',
            name: 'description',
            message: questions.description
        },
        {
            type: 'input',
            name: 'installation',
            message: questions.installation
        },
        {
            type: 'input',
            name: 'usage',
            message: questions.usage
        },
        {
            type: 'confirm',
            name: 'license',
            message: questions.license,
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
        {
            type: 'input',
            name: 'contributing',
            message: questions.contributing
        },
        {
            type: 'input',
            name: 'tests',
            message: questions.tests
        },
        {
            type: 'input',
            name: 'email',
            message: questions.email
        },
        {
            type: 'input',
            name: 'github',
            message: questions.github
        }
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