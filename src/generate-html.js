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

function makeHTMLSections(team) {
    return team.map(function (element) {
        let icon;
        let info;

        if (element.getRole() === "Manager") {
            icon = "<i class='fas fa-coffee'></i>"
            info = "Office Number: " + element.getOfficeNumber();
        } else if (element.getRole() == "Engineer") {
            icon = "<i class='fas fa-calculator'></i>";
            info = "GitHub: " + element.getGithub();
        } else {
            icon = "<i class='fas fa-graduation-cap'></i>";
            info = "School: " + element.getSchool();
        }
        console.log(element)
        return `
<section>
    <p>${element.getName()}</p>
    ${icon} 
    <p>${element.getRole()}</p>
</section>

<section>
    <p>ID: ${element.getId()}</p>
    <p>Email: ${element.getEmail()}</p>
    <p>${info}</p>
</section>
        `;
    })
}

module.exports = formatHTML;