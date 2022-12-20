const Manager = require('../lib/Manager');

const manager = new Manager(`Joyce`, 845, `joy.ce@test.com`, 102);

describe('Manager', () => {
    describe('name', () => {
        it(`returns employee's name`, () => {
            expect(manager.getName()).toBe('Joyce');
        });
    });

    describe('id', () => {
        it(`returns employee's id`, () => {
            expect(manager.getId()).toBe(845);
        });
    });

    describe('email', () => {
        it(`returns employee's email`, () => {
            expect(manager.getEmail()).toBe('joy.ce@test.com');
        });
    });

    describe('officeNumber', () => {
        it(`returns employee's office number`, () => {
            expect(manager.getOfficeNumber()).toBe(102);
        });
    });

    describe('role', () => {
        it(`returns correct role`, () => {
            expect(manager.getRole()).toBe('Manager');
        });
    });
});