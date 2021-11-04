const inquirer = require("inquirer");
const fs = require("fs");
const {createManager, createEngineer, createIntern} = require("./src/create-members.js");
const generateHTML = require("./src/generate-html.js")

createManager(buildTeam);

function buildTeam(manager) {
    const team = [];
    team.push(manager);
    
    addEmployee();
    function addEmployee() {
        inquirer.prompt({
            type: "confirm",
            name: "again",
            message: "Enter another employee?: ",
            default: true
        }).then(function ({again}) {
            if (again) {
                inquirer.prompt({
                    type: "list",
                    name: "role",
                    message: "Select an employee: ",
                    choices: ["Engineer", "Intern"]
                }).then(function ({role}) {
                    if (role === "Engineer") {
                        createEngineer(add);
                    } else {
                        createIntern(add);
                    }
                    function add(employee) {
                        team.push(employee);
                        addEmployee();
                    }
                });
            } else {
                writeHTML(team);
            }
        });
    } 
}

function writeHTML(team) {
    fs.writeFile('./dist/index.html', generateHTML(team), function (error) {
        if (error) {
            console.error(error);
        }
    });
}