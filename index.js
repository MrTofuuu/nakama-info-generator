//importing packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');
const Manager = require('./lib/Manager.js');
//storing employee info from prompts
let employeeArr = [];
let finalArr;
let managerArr;
let engineerArr;
let internArr;
const questions = {
    name: `What is the employee's name?`,
    employeeID: `What is the employee's ID?`,
    email: `What is the employee's email?`,
    officeNumber: `What is the office number?`,
    github: `What is the GitHub ID of the engineer?`,
    school: `What school does the intern attend?`
};
// prompting user for information

const employeeInit = empArr => {
    managerArr = empArr.filter(empArr => empArr.role === 'Manager');
    engineerArr = empArr.filter(empArr => empArr.role === 'Engineer');
    internArr = empArr.filter(empArr => empArr.role === 'Intern');

    managerArr.forEach(manager => {
        const managerItem = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
        finalArr.push(managerItem);
    });
    engineerArr.forEach(engineer => {
        const engineerItem = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
        finalArr.push(engineerItem);
    });
    internArr.forEach(intern => {
        const internItem = new Intern(intern.name, intern.id, intern.email, intern.school);
        finalArr.push(internItem);
    });

    console.log(finalArr);
};
const promptUser = () => {
    return inquirer.prompt([{
            // This question is only asked when the license question is selected as yes
            type: 'list',
            name: 'role',
            message: questions.employeeType,
            choices: ['Manager', 'Engineer', 'Intern', 'Finished adding teammates']
        }, {
            type: 'input',
            name: 'name',
            message: questions.name
        },
        {
            type: 'input',
            name: 'id',
            message: questions.employeeID
        },
        {
            type: 'input',
            name: 'email',
            message: questions.email
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: questions.officeNumber,
            when: (answers) => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: questions.github,
            when: (answers) => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: questions.school,
            when: (answers) => answers.role === 'Intern'
        },


    ]).then((answers) => {
        if (answers.role === 'Finished adding teammates') {
            employeeArr.push(answers);
            console.log(answers);
            console.log(`End of Employee Question`);
            employeeInit(employeeArr);
        } else {
            employeeArr.push(answers);
            console.log(answers);
            console.log(`adding more employees`);
            console.log(employeeArr);

            return promptUser();
        }
    });
};


// function to initialize app
const init = () => {
    promptUser()
        .then(console.log("end of init"))
        // Use writeFileSync method to use promises instead of a callback function
        .then(fs.writeFileSync('./dist/index.html', generateHTML(finalArr)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};


// Function call to initialize app
init();