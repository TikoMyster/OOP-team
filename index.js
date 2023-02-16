const { Engineer, Manager, Intern } = require("./lib/classes");
const inquirer = require("inquirer");
const HTML = require("./src/template")
const { menu, managerQ, internQ, engineerQ } = require("./src/Q");

let employeeARR = []

const generateManager = async () => {
    const managerA = await inquirer.prompt(managerQ);
    const man = new Manager(managerA.name, managerA.id, managerA.email, managerA.office)
    employeeARR.push(man);
}

const promptenginerQ = async () => {
    const engineerA = await inquirer.prompt(engineerQ);
    const engin = new Engineer(engineerA.name, engineerA.id, engineerA.email, engineerA.github)
    employeeARR.push(engin);;
    generateEmployee();
}
const promptinternQ = async () => {
    const internA = await inquirer.prompt(internQ);
    const int = new Intern(internA.name, internA.id, internA.email, internA.school)
    employeeARR.push(int);
    generateEmployee();
}

const generateEmployee = async () => {
    const role = await inquirer.prompt(menu);
    switch (role.choice) {
        case "Engineer":
            promptenginerQ();
            break;
        case "Intern":
            promptinternQ();
            break;
        case "Finish":
            HTML(employeeARR);
            break;
        case "Default":
            console.log('Error')
    }
}

const generateTeam = async () => {
    await generateManager();
    generateEmployee();
}

generateTeam();