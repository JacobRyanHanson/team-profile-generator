const inquirer = require("inquirer");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
// Creates a manager.
function createManager(callback) {
    // Adds an office number to the manager response object.
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
            // Manager object is instantiated and sent to the buildTeam function.
            callback(new Manager(name, email, id, officeNumber));
        });
    }
}

function createEngineer(callback) {
    // Adds a GitHub username to the engineer response object.
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
            // Engineer object is instantiated and sent to the add function.
            callback(new Engineer(name, email, id, github));
        });
    }
}

function createIntern(callback) {
    // Adds a school to the intern response object.
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
            // Intern object is instantiated and sent to the add function.
            callback(new Intern(name, email, id, school));
        });
    }
}
// Creates a response object with a name, email, an id.
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
                // Response object is passed to a callback function above.
                callback(combinedResponse);
            });
        });
    });
}

module.exports = {createManager, createEngineer, createIntern};