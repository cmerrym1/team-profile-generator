const Employee = require('../lib/Employee');

test('test if we can retrieve name via getName', () => {
    const employee = new Employee('cheri', '51245', 'cmerrym1@kent.edu');
    expect(employee.getName()).toBe('cheri');
});

test('test if we can retrieve id via getId', () => {
    const employee = new Employee('cheri', '51245', 'cmerrym1@kent.edu');
    expect(employee.getId()).toBe('51245');
});

test('test if we can retrieve email via getEmail', () => {
    const employee = new Employee('cheri', '51245', 'cmerrym1@kent.edu');
    expect(employee.getEmail()).toBe('cmerrym1@kent.edu');
});

test('test if we can retrieve role via getRole', () => {
    const employee = new Employee('cheri', '51245', 'cmerrym1@kent.edu');
    expect(employee.getRole()).toBe('Employee');
});