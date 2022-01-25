const Manager = require('../lib/Manager');

test('test if we can retrieve name via getName', () => {
    const manager = new Manager('cheri', '51245', 'cmerrym1@kent.edu', '42');
    expect(manager.getName()).toBe('cheri');
});

test('test if we can retrieve id via getId', () => {
    const manager = new Manager('cheri', '51245', 'cmerrym1@kent.edu', '42');
    expect(manager.getId()).toBe('51245');
});

test('test if we can retrieve email via getEmail', () => {
    const manager = new Manager('cheri', '51245', 'cmerrym1@kent.edu', '42');
    expect(manager.getEmail()).toBe('cmerrym1@kent.edu');
});

test('test if we can retrieve office number via getOfficeNumber', () => {
    const manager = new Manager('cheri', '51245', 'cmerrym1@kent.edu', '42');
    expect(manager.getOfficeNumber()).toBe('42');
});

test('test if we can retrieve role via getRole', () => {
    const manager = new Manager('cheri', '51245', 'cmerrym1@kent.edu', '42');
    expect(manager.getRole()).toBe('Manager');
});
