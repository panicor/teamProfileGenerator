//requires node file system
const fs = require("fs");
//requires node inquirer
const inquirer = require("inquirer");

const path = require("path");
//loads generateMarkdown file in utils
const { Manager, Employee, Intern, Engineer } = require("./lib")

let employees = [];


// function to initialize app
function init() {
    //prints answer object
     inquirer.prompt([
            
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
                
        ])
        .then(employee => {
        const { name, id, email, officeNumber } = employee;
        const manager = new Manager(name, id, email, officeNumber)
        employees.push(manager)
       
        .then(employee => {
            switch(employee.employeeRole){
                case 'Intern':
                    addIntern(employee);
                    break;

                case 'Engineer':
                    addEngineer(employee);
                    break;
            }
        })


addIntern = (answers) => {
   inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter an intern id."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your intern's email address."
    },
   
    {
        type: "input",
        name: "school",
        message: "What school does your intern attend?"
    }
])
.then(school => {
    const intern = new Intern(answers.name, asnwers.id, answers.email, school.school)
    employees.push(intern);
    addEmployee();
}) 
}



addEngineer = (answers) => {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter an engineer id."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your engineer's email address."
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your engineer's GitHub username."

    }
])
.then(github => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, github.github)
    employees.push(engineer);
    addEmployee();
})
}

addEmployee = () => {
    inquirer.prompt([
    {
        type: 'list',
        name: 'employeeRole',
        message: 'What type of employee would you like to create?',
        choices: ['Engineer', 'Intern', 'None']
    }

])
.then(answers => {
    if (answers.employeeRole === 'Engineer'){
      addEngineer();
    }
    else if (answers.employeeRole === 'Intern'){
      addIntern();
    }
    else {
        console.log('ANSWERS OBJECT -> ', answers)
        //writes new readme file with object as content
       const content = generateHTML(answers)
       fs.writeFile("answers.html", content, err =>{
           //throws error if error
        if (err){
               console.error(err);
               return
           }
           console.log("HTML created successfully");
       }
       )
    
    };
})

}
})
}

// Function call to initialize app
init();
