const Employee = require('../lib/employee')

test('creating employee objects', () => {
    const employee = new Employee('Deja', 1998, 'dejaamaartin@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });

test('getting employee name', () => {
    const employee = new Employee('Deja', 1998, 'dejaamaartin@gmail.com');
    expect(employee.getName()).toEqual(employee.name);
});

test('getting employee ID', () => {
    const employee = new Employee('Deja', 1998, 'dejaamaartin@gmail.com');
    expect(employee.getId()).toEqual(employee.id);
});

test('getting employee email', () => {
    const employee = new Employee('Deja', 1998, 'dejaamaartin@gmail.com');
    expect(employee.getEmail()).toEqual(employee.email);
});

test('getting employee role', () => {
    const employee = new Employee('Deja', 1998, 'dejaamaartin@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
}); 

  