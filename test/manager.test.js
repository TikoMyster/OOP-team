const {Manager} = require('../lib/Classes');

describe('Manager class',()=>{
    const manager = new Manager('chris',3,'tikomyster20@gmail.com',3.0)

    it('returns the name, id, email and office number',()=>{
        expect(manager._name).toBe('chris');
        expect(manager._id).toBe(3);
        expect(manager._email).toBe('tikomyster20@gmail.com');
        expect(manager._officeNumber).toBe(3.0);
    })
    it('getRole() method returns "Manager"',()=>{
        expect(manager.getRole()).toBe('Manager');
    })
    it('getId() method returns the ID',()=>{
        expect(manager.getId()).toBe(manager._id);
    })

    it('getName() method returns the name',()=>{
        expect(manager.getName()).toBe(manager._name);
    })

    it('getEmail() method returns the email',()=>{
        expect(manager.getEmail()).toBe(manager._email);
    });

    it('getOffice() method returns the office number',()=>{
        expect(manager.getOfficeNumber()).toBe(manager._officeNumber);
    })
    
})