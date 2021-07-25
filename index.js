//requires node file system
const fs = require("fs");
//requires node inquirer
const inquirer = require("inquirer");
//loads generateMarkdown file in utils
const { Manager, Intern, Engineer, Employee } = require("./lib/index.js");

const generateHTML = require("./src/generateHTML");

let employees = [];

// function to initialize app
init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeRole",
        message: "What type of employee would you like to create?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is their name?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter their id.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter their email address.",
      },
    ])
    .then((employee) => {
      switch (employee.employeeRole) {
        case "Manager":
          addManager(employee);
          break;

        case "Intern":
          addIntern(employee);
          break;

        case "Engineer":
          addEngineer(employee);
          break;
      }
    });
};

addManager = (answers) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office number.",
      },
    ])
    .then((officeNumber) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        officeNumber.officeNumber
      );
      employees.push(manager);
      addEmployee();
    });
};

addIntern = (answers) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What school does your intern attend?",
      },
    ])
    .then((school) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        school.school
      );
      employees.push(intern);
      addEmployee();
    });
};

addEngineer = (answers) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "Please enter your engineer's GitHub username.",
      },
    ])
    .then((github) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        github.github
      );
      employees.push(engineer);
      addEmployee();
    });
};

addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Would you like to create another employee?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answers) => {
      if (answers.addEmployee === "Yes") {
        init();
      } else {
        const content = generateHTML(employees);
        fs.writeFile("./dist/answers.html", content, (err) => {
          err ? console.log(err) : console.log("HTML created successfully");
        });
      }
    });
};

// Function call to initialize app
init();
