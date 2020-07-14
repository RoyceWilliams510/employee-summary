const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeList = ["Manager","Intern", "Engineer"]
const allManagers = [];
const allInterns = [];
const allEngineers = [];
const allEmployees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

async function init() {
    const{employeeType} = await inquirer.prompt({
        type: "list",
        message:"Which type of employee do you want?",
        name: "employeeType",
        choices: employeeList
    })
    if(employeeType=== employeeList[0]){
        addManager();
    }
    if(employeeType=== employeeList[1]){
        addIntern();
    }
    if(employeeType=== employeeList[2]){
        addEngineer();
    }
}

// List of questions for creating employees of each class
const prompts = ["what is the employee's name: "
,"What is the employee's id number"
,"What is the employee's email address: ",
"What is this manager's office number: ",
"What is this engineer's github username: ",
"What school did this intern attend: "]

//function used to add Manager
async function addManager(){
    const {name} = await inquirer.prompt({
        message: prompts[0],
        name: "name"
    })

    const {id} = await inquirer.prompt({
        input:"number",
        message: prompts[1],
        name: "id"
    })
    const {email} = await inquirer.prompt({
        message: prompts[2],
        name: "email"
    })
    const {officeNumber} = await inquirer.prompt({
        input:"number",
        message: prompts[3],
        name: "officeNumber"
    })
    const employee = new Manager(name,id,email,officeNumber);
    console.log(employee);
    allManagers.push(employee);
    allEmployees.push(employee);
    const {continuer} = await inquirer.prompt({
        type:"confirm",
        message:"would you like to add more Managers? ",
        name: "continuer"
    })
    if(continuer=== true){
        addManager();
    }
    if(continuer=== false){
        const {finished} = await inquirer.prompt({
            type:"confirm",
            message:"would you like to add any other employee's? ",
            name: "finished"
        })
        if(finished=== true){
            init();
        }
        if(finished === false){
            finishedAdding();
        }
    }
}

//function used to add Engineer

async function addEngineer(){
    const {name} = await inquirer.prompt({
        message: prompts[0],
        name: "name"
    })

    const {id} = await inquirer.prompt({
        input:"number",
        message: prompts[1],
        name: "id"
    })
    const {email} = await inquirer.prompt({
        message: prompts[2],
        name: "email"
    })
    const {github} = await inquirer.prompt({
        message: prompts[4],
        name: "github"
    })
    const employee = new Engineer(name,id,email,github);
    console.log(employee);
    allEngineers.push(employee);
    allEmployees.push(employee);
    const {continuer} = await inquirer.prompt({
        type:"confirm",
        message:"would you like to add more Engineers?",
        name: "continuer"
    })
    if(continuer=== true){
        addEngineer();
    }
    if(continuer=== false){
        const {finished} = await inquirer.prompt({
            type:"confirm",
            message:"would you like to add any other employee's? ",
            name: "finished"
        })
        if(finished=== true){
            init();
        }
        if(finished === false){
            finishedAdding();
        }
    }
}

//function used to add Intern

async function addIntern(){
    const {name} = await inquirer.prompt({
        message: prompts[0],
        name: "name"
    })

    const {id} = await inquirer.prompt({
        input:"number",
        message: prompts[1],
        name: "id"
    })
    const {email} = await inquirer.prompt({
        message: prompts[2],
        name: "email"
    })
    const {school} = await inquirer.prompt({
        message: prompts[5],
        name: "school"
    })
    const employee = new Intern(name,id,email,school);
    console.log(employee);
    allInterns.push(employee);
    allEmployees.push(employee);

    const {continuer} = await inquirer.prompt({
        type:"confirm",
        message:"would you like to add more interns?",
        name: "continuer"
    })
    if(continuer=== true){
        addIntern();
    }
    if(continuer=== false){
        const {finished} = await inquirer.prompt({
            type:"confirm",
            message:"would you like to add any other employee's? ",
            name: "finished"
        })
        if(finished=== true){
            init();
        }
        if(finished === false){
            finishedAdding();
        }
    }
}

function finishedAdding(){
    fs.writeFile(outputPath,render(allEmployees), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}
init();
