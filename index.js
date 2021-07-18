//requires node file system
const fs = require("fs");
//requires node inquirer
const inquirer = require("inquirer");
//loads generateMarkdown file in utils
const generateHTML = require("./generateHTML.js")

//array of questions
const questions = [
{
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address."
},
{
    type: "input",
    name: "github",
    message: "Please enter your GitHub username."
},
{
    type: "input",
    name: "description",
    message: "Please enter a description of your project."
},
{
    type: "input",
    name: "installation",
    message: "Please enter any installation instructions."
},
{
    type: "input",
    name: "usage",
    message: "Please enter any usage information."
},
{
    type: "input",
    name: "contributionGuidelines",
    message: "Please enter any contribution guidelines."
},
{
    type: "list",
    name: "license",
    message: "Please select the the project license.",
    //choices separated by line
    choices: ["MIT", new inquirer.Separator(), "BSD", new inquirer.Separator(), "Apache", new inquirer.Separator(), "GPL"]
},
{
    type: "input",
    name: "test",
    message: "Please enter any test instructions."
},

];


// function to initialize app
function init() {
    //prints answer object
    inquirer.prompt(questions).then(answers => {
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
