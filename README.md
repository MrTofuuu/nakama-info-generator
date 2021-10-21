# nakama-info-generator

# **Nakama Info Generator**

Welcome to my nakama info generator!


## Description

Being able to create your nakama on through command line prompts and having it dynamically create a webpage using OOP concepts is the way to go for the future!

### **Tasks completed**

Created a team profile generator using node.js and jest.


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

**HAVING NODE.JS INSTALLED IS A REQUIREMENT FOR THIS APPLICATION TO WORK!**

1. Download all files from the repository.
2. CD into the repository.
3. Run this command to install inquirer
```md
npm install inquirer
```
4. Run this command to run the application
```md
node index.js
```

## Screenshots and Video Link of application

[Nakama Gen Screenshot](./assets/NakamaGenerator.png)

[Nakama Info Generator Video](https://watch.screencastify.com/v/hPN8HLMX6imsCC8Rw2kj)


### **Links**

[Link to the code repository](https://github.com/MrTofuuu/nakama-info-generator)

## Credits
Chris Stallcup, Theo Moreland, Frantz Felix, Andrew Tran

### References and tutorials utilized
* [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)
* [https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
* [https://betterprogramming.pub/add-badges-to-a-github-repository-716d2988dc6a](https://betterprogramming.pub/add-badges-to-a-github-repository-716d2988dc6a)
* [How to use Inquirer](https://www.npmjs.com/package/inquirer)
* [How to use Switch statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
* [How to use when condition in inquirer](https://stackoverflow.com/questions/56412516/conditional-prompt-rendering-in-inquirer)
* [https://javascript.info/class-inheritance](https://javascript.info/class-inheritance)
* [https://www.educba.com/overriding-in-javascript/](https://www.educba.com/overriding-in-javascript/)

## Badges

[![GitHub open issues](https://img.shields.io/github/issues/MrTofuuu/nakama-info-generator?style=for-the-badge)](https://github.com/MrTofuuu/nakama-info-generator/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/MrTofuuu/nakama-info-generator?style=for-the-badge)](https://img.shields.io/github/issues-closed/MrTofuuu/nakama-info-generator?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/MrTofuuu/nakama-info-generator?style=for-the-badge)](https://github.com/MrTofuuu/nakama-info-generator/stargazers)
[![GitHub license](https://img.shields.io/github/license/mrtofuuu/nakama-info-generator?style=for-the-badge)](./LICENSE.md)


