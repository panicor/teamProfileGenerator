//requires node file system
const fs = require("fs");
//requires node inquirer
const inquirer = require("inquirer");

const path = require("path");
//loads generateMarkdown file in utils
const { Manager, Employee, Intern, Engineer } = require("./lib")

const employees = [];

//array of questions
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter an id."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office number."
    }
];




// function to initialize app
function init() {
    //prints answer object
    inquirer.prompt(questions)
    .then(manager => {
        const { name, id, email, officeNumber } = manager
        const manager = new Manager(name, id, email, officeNumber)
        employees.push(manager)
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeRole',
                message: 'What type of employee would you like to create?',
                choices: ['Engineer', 'Intern']
            }
        ])
        .then(employee => {
            switch(employee.employeeRole){
                case 'Intern':
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "school",
                            message: "What school do you attend?"
                        }
                    ])
                    .then(intern => {
                        const intern = new Intern()
                    })
                    break;

                case 'Engineer':
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "github",
                            message: "Please enter your GitHub username."

                        }
                    ])
                    break;
            }
        })



        console.log('ANSWERS OBJECT -> ', answers)
        //writes new readme file with object as content
       const content = generateHTML(answers)
       fs.writeFile("answers.html", content, err =>{
           //throws error if error
        if (err){
               console.error(err);
               return
           }
           console.log("Success");
       }

       )
    })
}

// Function call to initialize app
init();
