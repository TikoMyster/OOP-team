const {Manager} = require('../lib/Classes');

describe('Manager class',()=>{
    const man = new Manager('Kato',3,'tikomyster20@gmail.com',3.0)

    it('returns the name, id, email and office number',()=>{
        expect(man._name).toBe('Kato');
        expect(man._id).toBe(3);
        expect(man._email).toBe('tikomyster20@gmail.com');
        expect(man._officeNumber).toBe(300);
    })
    it('getRole() method returns "Manager"',()=>{
        expect(man.getRole()).toBe('Manager');
    })
    it('getId() method returns the ID',()=>{
        expect(man.getId()).toBe(man._id);
    })

    it('getName() method returns the name',()=>{
        expect(man.getName()).toBe(man._name);
    })

    it('getEmail() method returns the email',()=>{
        expect(man.getEmail()).toBe(man._email);
    });

    it('getOffice() method returns the office number',()=>{
        expect(man.getOfficeNumber()).toBe(man._officeNumber);
    })
    
})