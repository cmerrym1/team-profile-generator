const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require('./src/page-template');

const teamMembers = []

const promptManager = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your managers name?"
            },

            {
                type: "input",
                name: "idNumber",
                message: "What is his/her id number?"
            },

            {
                type: "input",
                name: "email",
                message: "What is his/her email address?"
            },

            {
                type: "input",
                name: "officeNumber",
                message: "What is his/her office number?"
            }
        ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.idNumber, answers.email, answers.officeNumber);
            teamMembers.push(manager);
            promptMenu();
        })
    }

    const promptMenu =() => {
        return inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What type of team member would you like to add?",
                choices: ["Intern", "Engineer", "Finish creating my Team Profile"]
            }])
            .then(userAnswer => {
                switch (userAnswer.memberChoice) {
                    case "Engineer":
                        promptEngineer();
                        break;

                        case "Intern":
                            promptIntern();
                            break;
                    default:
                        createTeam();
            }
        });
    };

    const promptEngineer = () => {
        console.log(`
        ===============
        Add New Engineer
        ===============
        `);

        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your engineers name?"
            },

            {
                type: "input",
                name: "idNumber",
                message: "What is his/her id number?"
            },

            {
                type: "input",
                name: "email",
                message: "What is his/her email address?"
            },

            {
                type: "input",
                name: "github",
                message: "What is his/her github username?"
            }
        ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.idNumber, answers.email, answers.github);
            teamMembers.push(engineer);
            promptMenu();
        });
    };
    
    const promptIntern = () => {
        console.log(`
        ===============
        Add New Intern
        ===============
        `);

        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your interns name?"
            },

            {
                type: "input",
                name: "idNumber",
                message: "What is his/her id number?"
            },

            {
                type: "input",
                name: "email",
                message: "What is his/her email address?"
            },

            {
                type: "input",
                name: "github",
                message: "What is the name of his/her school?"
            }
        ])
        .then(answers => {
            console.log(answers);
            const intern = new Intern(answers.name, answers.idNumber, answers.email, answers.github);
            teamMembers.push(intern);
            promptMenu();
        });
    };


    const createTeam =() => {
        console.log(`
        ===============
        Finish creating my Team Profile
        ===============
        `);

        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

promptManager();