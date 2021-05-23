const Intern = require('../lib/intern');

test('creating intern object', () => {
    const intern = new Intern('Deja', 1998, 'dejaamaartin@gmail.com', 'Univeristy of Toronto');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));

    expect(intern.school).toEqual(expect.any(String));
});

test('getting intern school', () => {
    const intern = new Intern('Deja', 1998, 'dejaamaartin@gmail.com', 'University of Toronto');

    expect(intern.getSchool()).toEqual(intern.school);
});

test('getting intern role', () => {
    const intern = new Intern('Deja', 1998, 'dejaamaartin@gmail.com');

    expect(intern.getRole()).toEqual('Intern');
});