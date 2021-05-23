const Engineer = require('../lib/engineer');

test('creating engineer object', () => {
    const engineer = new Engineer('Deja', 1998, 'dejaamaartin@gmail.com', 'dejagraver');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

  });

test('getting engineer github', () => {
    const engineer = new Engineer('Deja', 1998, 'dejaamaartin@gmail.com', 'dejagraver');
    expect(engineer.getGithub()).toEqual(engineer.github);
});

test('getting engineer Role', () => {
    const engineer = new Engineer('Deja', 1998, 'dejaamaartin@gmail.com', 'dejagraver');
    expect(engineer.getRole()).toEqual('Engineer');
});

