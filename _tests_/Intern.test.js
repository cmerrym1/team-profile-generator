const Intern = require('../lib/Intern');

test('test if we can retrieve name via getName', () => {
    const intern = new Intern('cheri', '51245', 'cmerrym1@kent.edu', 'Ohio State University');
    expect(intern.getName()).toBe('cheri');
});

test('test if we can retrieve id via getId', () => {
    const intern = new Intern('cheri', '51245', 'cmerrym1@kent.edu', 'Ohio State University');
    expect(intern.getId()).toBe('51245');
});

test('test if we can retrieve email via getEmail', () => {
    const intern = new Intern('cheri', '51245', 'cmerrym1@kent.edu', 'Ohio State University');
    expect(intern.getEmail()).toBe('cmerrym1@kent.edu');
});

test('test if we can retrieve school via getSchool', () => {
    const intern = new Intern('cheri', '51245', 'cmerrym1@kent.edu', 'Ohio State University');
    expect(intern.getSchool()).toBe('Ohio State University');
});

test('test if we can retrieve role via getRole', () => {
    const intern = new Intern('cheri', '51245', 'cmerrym1@kent.edu', 'Ohio State University');
    expect(intern.getRole()).toBe('Intern');
});
