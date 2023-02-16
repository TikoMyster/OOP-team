class Employee {
    constructor(id, name, email){
        this._id = id;
        this._name = name;
        this._email = email;
    }
    GetRole(){
        return 'Employee'
    }
    GetId(){
        return this._id;
    }
    GetName(){
        return this._name;
    }
    GetEmail(){
        return this._email;
    }
}
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name, id, email);
        this._school = school;
    }
    GetSchool(){
        return this._school;
    }
    GetRole(){
        return "Intern"
    }
}
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this._github = github
    }
    GetGithub(){
        return this._github;
    }
    GetRole(){
        return 'Engineer'
    }
}
class Manager extends Employee{
    constructor(name,id,email,OfficeN){
        super(name,id,email);
        this._officeNumber = OfficeN;
    }
    GetOfficeNumber(){
        return this._officeNumber;
    }
    GetRole(){
        return 'Manager'
    }
}

module.exports = {Employee, Manager, Engineer, Intern};