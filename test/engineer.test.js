const {Engineer} = require('../lib/Classes');

describe('Engineer class',()=>{
    const engin = new Engineer('chris',2,'tikomyster20@gmail.com','ChrisS.')
    it('returns the name, id, email and github username',()=>{
        expect(engin._name).toBe('Silas');
        expect(engin._id).toBe(2);
        expect(engin._email).toBe('tikomyster20@gmail.com');
        expect(engin._github).toBe('SilasisCool.')
    })
    it('getRole() returns "Engineer',()=>{
        expect(engin.getRole()).toBe('Engineer');
    })
    it('getId() method returns the ID',()=>{
        expect(engin.getId()).toBe(engin._id);
    })

    it('getName() method returns the name',()=>{
        expect(engin.getName()).toBe(engin._name);
    })

    it('getEmail() method returns the email',()=>{
        expect(engin.getEmail()).toBe(engin._email);
    });

    it('getGithub() method returns the github username',()=>{
        expect(engin.getGithub()).toBe(engin._github);
    })

})