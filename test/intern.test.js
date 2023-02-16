const {Intern} = require('../lib/Classes');

describe('Intern class',()=>{
    const int = new Intern('chris',4,'tikomyster20@gmail.com','Stanford')
    it('returns the name, id, email and github username',()=>{
        expect(int._name).toBe('Remy');
        expect(int._id).toBe(4);
        expect(int._email).toBe('tikomyster20@gmail.com');
        expect(int._school).toBe('Stanford')
    })
    it('getRole() returns "Intern',()=>{
        expect(int.getRole()).toBe('Intern');
    })
    it('getId() method returns the ID',()=>{
        expect(int.getId()).toBe(int._id);
    })

    it('getName() method returns the name',()=>{
        expect(int.getName()).toBe(int._name);
    })

    it('getEmail() method returns the email',()=>{
        expect(int.getEmail()).toBe(int._email);
    });

    it('getSchool() method returns the github username',()=>{
        expect(int.getSchool()).toBe(int._school);
    })

})