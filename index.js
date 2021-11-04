const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

createManager(buildTeam);

function createManager(callback) {
    inquirer.prompt({
        type: "text",
        name: "name",
        message: "Enter the team manager’s name: "
    }).then(function (response) {
        inquirer.prompt({
            type: "text",
            name: "email",
            message: "Enter the team manager’s email: "
        }).then(function (responseEmail) {
            response.email = responseEmail.email;
            return response;
        }).then(function (combinedResponse) {
            inquirer.prompt({
                type: "text",
                name: "id",
                message: "Enter the team manager’s id: "
            }).then(function (responseId) {
                combinedResponse.id = responseId.id;
                return combinedResponse;
            }).then(function (combinedResponse) {
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
            });
        });
    });
}

function buildTeam(manager) {
    const team = [];
    team.push(manager);
    console.log(team)
}