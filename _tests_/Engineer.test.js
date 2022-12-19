const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Esther', 253, 'esther@test.com', 'estherrr');

describe('Engineer', () => {
    describe('name', () => {
        it(`returns Engineer's name`, () => {
            expect(engineer.name).toBe('Esther');
      })
    });

    describe('id', () => {
        it(`returns Engineer's id`, () => {
            expect(engineer.id).toBe(253);
      })
    })
    
    describe('email', () => {
        it(`returns Engineer's email`, () => {
            expect(engineer.email).toBe('esther@test.com');
      })
    })
    
    describe('github', () => {
        it(`returns github account`, () => {
            expect(engineer.getGithub()).toBe('estherrr');
        })
    });
    
    describe('role', () => {
        it(`returns correct role`, () => {
            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});