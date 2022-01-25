const Engineer = require('../lib/Engineer');

test('test if we can retrieve name via getName', () => {
    const engineer = new Engineer('cheri', '51245', 'cmerrym1@kent.edu', 'cmerrym1');
    expect(engineer.getName()).toBe('cheri');
});

test('test if we can retrieve id via getId', () => {
    const engineer = new Engineer('cheri', '51245', 'cmerrym1@kent.edu', 'cmerrym1');
    expect(engineer.getId()).toBe('51245');
});

test('test if we can retrieve email via getEmail', () => {
    const engineer = new Engineer('cheri', '51245', 'cmerrym1@kent.edu', 'cmerrym1');
    expect(engineer.getEmail()).toBe('cmerrym1@kent.edu');
});

test('test if we can retrieve github via getGithub', () => {
    const engineer = new Engineer('cheri', '51245', 'cmerrym1@kent.edu', 'cmerrym1');
    expect(engineer.getGithub()).toBe('cmerrym1');
});

test('test if we can retrieve role via getRole', () => {
    const engineer = new Engineer('cheri', '51245', 'cmerrym1@kent.edu', 'cmerrym1');
    expect(engineer.getRole()).toBe('Engineer');
});
