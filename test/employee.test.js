const { Employee } = require('../lib/Classes')

describe('Employee class', () => {
    const employee = new Employee('chris', 1, 'tikomyster20@gmail.com')
    it('returns the name,id and email of the employee', () => {
        expect(employee._name).toBe('chris');
        expect(employee._id).toBe(1);
        expect(employee._email).toBe('tikomyster20@gmail.com');
    });
    it('getRole() method returns "Employee"', () => {
        expect(employee.getRole()).toBe('Employee');
    })
    it('getId() method returns the id', () => {
        expect(employee.getId()).toBe(employee._id);
    });
    
    it('getName() method returns the name', () => {
        expect(employee.getName()).toBe(employee._name);
    });

    it('getEmail() method returns the email', () => {
        expect(employee.getEmail()).toBe(employee._email);
    });
   

})