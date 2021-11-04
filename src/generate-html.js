// Formats the HTML for the page based on the strings (cards) returned by the makeHTMLSections function.
function formatHTML(team) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous">
</head>

<body>
    <header>
        <h1>Team</h1>
    </header>

    <main>
        ${makeHTMLSections(team).join("")}
    </main>
</body>

</html>
    `;
}
// For each object in the team array a section (card) is generated as an HTML string and stored in the mapped array.
function makeHTMLSections(team) {
    return team.map(function (element) {
        let icon;
        let info;

        if (element.getRole() === "Manager") {
            icon = "<i class='fas fa-coffee fa-lg'></i>"
            info = "Office Number: " + element.getOfficeNumber();
        } else if (element.getRole() == "Engineer") {
            icon = "<i class='fas fa-calculator fa-lg'></i>";
            info = "<a href='https://github.com/" + element.getGithub() + "'>GitHub: " + element.getGithub() + "</a>";
        } else {
            icon = "<i class='fas fa-graduation-cap fa-lg'></i>";
            info = "School: " + element.getSchool();
        }

        return `
<section class='card'>
    <section class='card-head'>
        <p class='name'>${element.getName()}</p>
        ${icon} 
        <p class='role inline'>${element.getRole()}</p>
    </section>

    <section class='card-body'>
        <p>ID: ${element.getId()}</p>
        <p><a href='mailto:${element.getEmail()}'>Email: ${element.getEmail()}</a></p>
        <p>${info}</p>
    </section>
</section>
        `;
    });
}

module.exports = formatHTML;