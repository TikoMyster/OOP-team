const {Engineer} = require('../lib/Classes');

describe('Engineer class',()=>{
    const engineer = new Engineer('chris',2,'tikomyster20@gmail.com','ChrisS.')
    it('returns the name, id, email and github username',()=>{
        expect(engineer._name).toBe('chris');
        expect(engineer._id).toBe(2);
        expect(engineer._email).toBe('tikomyster20@gmail.com');
        expect(engineer._github).toBe('ChrisS.')
    })
    it('getRole() returns "Engineer',()=>{
        expect(engineer.getRole()).toBe('Engineer');
    })
    it('getId() method returns the ID',()=>{
        expect(engineer.getId()).toBe(engineer._id);
    })

    it('getName() method returns the name',()=>{
        expect(engineer.getName()).toBe(engineer._name);
    })

    it('getEmail() method returns the email',()=>{
        expect(engineer.getEmail()).toBe(engineer._email);
    });

    it('getGithub() method returns the github username',()=>{
        expect(engineer.getGithub()).toBe(engineer._github);
    })

})