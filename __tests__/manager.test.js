// const { TestScheduler } = require('jest');
const Manager = require('../lib/manager');

test('creating manager object', () => {
    const manager = new Manager('Deja', 1998, 'dejaamaartin@gmail.com', 23);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getting manager role', () => {
    const manager = new Manager('Deja', 1998, 'dejaamaartin@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});