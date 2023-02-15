const {Intern} = require('../lib/Classes');

describe('Intern class',()=>{
    const intern = new Intern('chris',4,'tikomyster20@gmail.com','Stanford')
    it('returns the name, id, email and github username',()=>{
        expect(intern._name).toBe('chris');
        expect(intern._id).toBe(4);
        expect(intern._email).toBe('tikomyster20@gmail.com');
        expect(intern._school).toBe('Stanford')
    })
    it('getRole() returns "Intern',()=>{
        expect(intern.getRole()).toBe('Intern');
    })
    it('getId() method returns the ID',()=>{
        expect(intern.getId()).toBe(intern._id);
    })

    it('getName() method returns the name',()=>{
        expect(intern.getName()).toBe(intern._name);
    })

    it('getEmail() method returns the email',()=>{
        expect(intern.getEmail()).toBe(intern._email);
    });

    it('getSchool() method returns the github username',()=>{
        expect(intern.getSchool()).toBe(intern._school);
    })

})