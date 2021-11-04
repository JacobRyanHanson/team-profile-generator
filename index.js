const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

createManager(buildTeam);

function createManager(callback) {
    getInfo("Manager", addOffice);

    function addOffice(combinedResponse) {
        inquirer.prompt({
            type: "text",
            name: "officeNumber",
            message: "Enter the team manager’s office number: "
        }).then(function (responseOfficeNumber) {
            combinedResponse.officeNumber = responseOfficeNumber.officeNumber;
            return combinedResponse;
        }).then(function ({name, email, id, officeNumber}) {
            callback(new Manager(name, email, id, officeNumber));
        });
    }
}

function getInfo(role, callback) {
    inquirer.prompt({
            type: "text",
            name: "name",
            message: "Enter the " + role + "'s name: "
    }).then(function (response) {
        inquirer.prompt({
            type: "text",
            name: "email",
            message: "Enter the " + role + "'s email: "
        }).then(function (responseEmail) {
            response.email = responseEmail.email;
            return response;
        }).then(function (combinedResponse) {
            inquirer.prompt({
                type: "text",
                name: "id",
                message: "Enter the " + role + "'s id: "
            }).then(function (responseId) {
                combinedResponse.id = responseId.id;
                callback(combinedResponse);
            });
        });
    });
}

function buildTeam(manager) {
    const team = [];
    team.push(manager);
    console.log(team)

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
                    team.push(createEngineer());
                } else {
                    team.push(createIntern());
                }
                console.log(team)
            });
        }
    });  
}

function createEngineer() {
    
}