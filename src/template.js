const FS = require('fs');
const utility = require('util')
const writeFile = utility.promisify(FS.writeFile);

const generateBodyBefore = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="d-flex justify-content-center align-items-center bg-dark text-white">
            <h1>My team</h1>
        </header>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
    `
}

const generateBodyAfter = () => {
    return `        
            </div>
        </div>
    </body>
    </html>`
}
const generateManager = (manData) => {
    return `
    <div class="col-12 col-md-4 col-lg-3 my-3 mx-1 d-flex justify-content-center align-items-center">
        <div class="card " style="width: 16rem;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${manData.getname()}</h5>
                <p><i class="fa-solid fa-mug-hot"></i><span class="card-text pl-2">${manData.getRole()}</span></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${manData.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${manData.getEmail()}">${manData.getEmail()}</a></li>
                <li class="list-group-item">Office number:${manData.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
`
}

const generateEngineer = (EngineerD) => {
    return `
    <div class="col-12 col-md-4 col-lg-3 my-3 mx-1 d-flex justify-content-center align-items-center">
        <div class="card " style="width: 16rem;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${EngineerD.getname()}</h5>
                <p><i class="fa-solid fa-glasses"></i><span class="card-text pl-2">${EngineerD.getRole()}</span></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${EngineerD.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${EngineerD.getEmail()}">${EngineerD.getEmail()}</a></li>
                <li class="list-group-item">Github:<a href="https://github.com/${EngineerD.getGithub()}">${EngineerD.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `
}

const generateIntern = (InternD) => {
    return `
    <div class="col-12 col-md-4 col-lg-3 my-3 mx-1 d-flex justify-content-center align-items-center">
        <div class="card " style="width: 16rem;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${InternD.getName()}</h5>
                <p><i class="fa-solid fa-graduation-cap"></i><span class="card-text pl-2">${InternD.getRole()}</span></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${InternD.getId()}</li>
                <li class="list-group-item">Email:<a href="mailto: ${InternD.getEmail()}">${InternD.getEmail()}</a></li>
                <li class="list-group-item">School:${InternD.getSchool()}</li>
            </ul>
        </div>
    </div>`
}

generateHTML = async (employeeARR) => {
    let html = generateBodyBefore();
    html += generateManager(employeeARR[0]);

    for (let x = 0; x < employeeARR.length; x++) {
        switch (employeeARR[x].getRole()) {
            case 'Engineer':
                html += generateEngineer(employeeARR[x]);
                break;
            case 'Intern':
                html += generateIntern(employeeARR[x]);
                break;
            case 'default':
                console.log(error);
        }
    }
    html += generateBodyAfter();
    writeFile("./dist/index.html", html).then(err => err ? console.log(err) : console.log("File successfully generated in the dist folder"))

}

module.exports = generateHTML;