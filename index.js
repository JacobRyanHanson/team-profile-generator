const inquirer = require("inquirer");
const fs = require("fs");
const {createManager, createEngineer, createIntern} = require("./src/create-members.js");
const generateHTML = require("./src/generate-html.js")
// After a manager is created the buildTeam function is called.
createManager(buildTeam);
// Builds an array of objects begenning with the manager.
function buildTeam(manager) {
    const team = [];
    team.push(manager);
    
    addEmployee();
    // Adds an engineer or an intern to team based on the user's selection.
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
                        // An engineer is created and added via the add function when it has a value.
                        createEngineer(add);
                    } else {
                        // An intern is created and added via the add function when it has a value.
                        createIntern(add);
                    }
                    function add(employee) {
                        team.push(employee);
                        // Recursive function call to allow user to add multiple team members.
                        addEmployee();
                    }
                });
            } else {
                writeHTML(team);
            }
        });
    } 
}
// Writes the appropriate HTML to the index.html file.
function writeHTML(team) {
    fs.writeFile('./dist/index.html', generateHTML(team), function (error) {
        if (error) {
            console.error(error);
        }
    });
}