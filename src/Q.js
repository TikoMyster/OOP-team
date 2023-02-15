const managerQ = [{
    type: "input",
    message: "Managers Name?",
    name: "name",
    validate: function (input) {
        return typeof input === "string" ? true : "Enter Manager's Name"
    }

},
{
    type: "input",
    message: "Manager's Employee ID?",
    name: "id",
    validate: function (id) {
        return isNaN(parent(id)) ? "Enter manager's employee id" :true;
    }
},
{
    type: "input",
    message: "What's the manager's email address?",
    name: "email",
    validate: function (email) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) || "eEnter the manager's email";
    },
},
{
    type: "input",
    message: "What's the manager's office number?",
    name: "office",
    validate: function (office) {
        return isNaN(parseInt(office)) ?  "Please enter the manager's office number": true;
    }
}]
const engineerQ = [{
    type: "input",
    message: "What's the engineer's name?",
    name: "name",
    validate: function (input) {
        return typeof input === "string" ? true : "Please enter the engineer's name!"
    }
},
{
    type: "input",
    message: "What's the engineer's employee ID?",
    name: "id",
    validate: function (id) {
        return isNaN(parseInt(id))? "Please enter the engineer's employee ID!": true;
    }
},
{
    type: "input",
    message: "What's the engineer's email address?",
    name: "email",
    validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) || "Enter engineer's email";
        
    }
},
{
    type: "input",
    message: "What's the engineer's Github username?",
    name: "github",
    validate: function (github) {
        return !!github || "Enter the engineer's Github username"
    }

}];

const internQ = [{
    type: "input",
    message: "What's the intern's name?",
    name: "name",
    validate: function (input) {
        return typeof input === "string" ? true : "Please enter the intern's name"
    }
},
{
    type: "input",
    message: "What's the intern's employee ID?",
    name: "id",
    validate: function (id) {
        return isNaN(parseInt(id)) ? "Enter the intern's employee ID" : true;
    }
},
{
    type: "input",
    message: "What's the intern's email address?",
    name: "email",
    validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) || "Enter the intern's email";
    }
},
{
    type: "input",
    message: "What's the intern's school?",
    name: "school",
    validate: function (school) {
        return !!school || "Intern's school"
    }

}];

const menu = [{
    type: 'list',
    name: 'choice',
    message: 'Choose to add an engineer or an intern or finish building your team',
    choices: [
        "Engineer",
        "Intern",
        "Finish"
    ]
}];

module.exports = { managerQ, engineerQ, internQ, menu }