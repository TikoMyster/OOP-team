const { Engineer, Manager, Intern } = require("./lib/classes");
const inquirer = require("inquirer");
const HTML = require("./src/template")
const { menu, managerQ, internQ, engineerQ } = require("./src/Q");

let employeeARR = []

const generateManager = async () => {
    const ManagerA = await inquirer.prompt(managerQ);
    const Manager = new Manager(ManagerA.name, ManagerA.id, ManagerA.email, ManagerA.office)
    employeeARR.push(Manager);
}

const promptenginerQ = async () => {
    const EngineerA = await inquirer.prompt(engineerQ);
    const Engineer = new Engineer(EngineerA.name, EngineerA.id, EngineerA.email, EngineerA.github)
    employeeARR.push(egineer);;
    generateEmployee();
}
const promptinternQ = async () => {
    const InternA = await inquirer.prompt(internQ);
    const Intern = new Intern(InternA.name, InternA.id, InternA.email, InternA.school)
    employeeARR.push(Intern);
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