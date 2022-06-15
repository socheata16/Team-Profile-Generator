const Manager = require('');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 