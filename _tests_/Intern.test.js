const Intern = require('../lib/Intern');

const intern = new Intern(`Bo`, 778, `bo_44@test.com`, `UofT`);

describe('Intern', () => {
    describe('name', () => {
        it(`returns employee's name`, () => {
            expect(intern.getName()).toBe('Bo');
        });
    });

    describe('id', () => {
        it(`returns employee's id`, () => {
            expect(intern.getId()).toBe(778);
        });
    });

    describe('email', () => {
        it(`returns employee's email`, () => {
            expect(intern.getEmail()).toBe('bo_44@test.com');
        });
    });

    describe('school', () => {
        it(`returns employee's school`, () => {
            expect(intern.getSchool()).toBe('UofT');
        });
    });
    
    describe('role', () => {
        it(`returns correct role`, () => {
            expect(intern.getRole()).toBe('Intern');
        });
    });
});