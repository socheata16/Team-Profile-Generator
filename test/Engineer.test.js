const Engineer = require('');

 
test('creates an Engineer object', () => {
    const engineer = new Engineer('Alec', 2, 'alec@fakemail', 'ibealec');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('Alec', 2, 'alec@fakemail', 'ibealec');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

 
test('gets role of employee', () => {
    const engineer = new Engineer('Alec', 2, 'alec@fakemail', 'ibealec');

    expect(engineer.getRole()).toEqual("Engineer");
});