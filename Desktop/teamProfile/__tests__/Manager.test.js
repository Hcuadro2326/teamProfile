// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Hector', 25 ,'cuadro.bebo2326@gmail.com', 2);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Hector', 25 ,'cuadro.bebo2326@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 
