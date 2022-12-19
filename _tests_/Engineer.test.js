const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Esther', 253, 'esther@test.com', 'estherrr');

describe('Engineer', () => {
    it(`returns Engineer's name`, () => {
        expect(engineer.name).toBe('Esther');
  })
});

describe('Engineer.getEmail', () => {})


describe('getGithub()', () => {
    it(`returns github account`, () => {
        expect(engineer.getGitHubAccount()).toBe('esther@test.com');
    })
});

describe('Engineer', () => {
    it(`returns correct role`, () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
});