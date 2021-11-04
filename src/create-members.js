const inquirer = require("inquirer");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

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

function createEngineer(callback) {
    getInfo("Engineer", addGithub);

    function addGithub(combinedResponse) {
        inquirer.prompt({
            type: "text",
            name: "github",
            message: "Enter the engineer's GitHub username: "
        }).then(function (responseGithub) {
            combinedResponse.github = responseGithub.github;
            return combinedResponse;
        }).then(function ({name, email, id, github}) {
            callback(new Engineer(name, email, id, github));
        });
    }
}

function createIntern(callback) {
    getInfo("Intern", addGithub);

    function addGithub(combinedResponse) {
        inquirer.prompt({
            type: "text",
            name: "school",
            message: "Enter the intern's school: "
        }).then(function (responseSchool) {
            combinedResponse.school = responseSchool.school;
            return combinedResponse;
        }).then(function ({name, email, id, school}) {
            callback(new Intern(name, email, id, school));
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

module.exports = {createManager, createEngineer, createIntern};