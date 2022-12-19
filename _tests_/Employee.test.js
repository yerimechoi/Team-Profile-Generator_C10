const Employee = require('../lib/Employee');

const employee = new Employee(`Timothy`, 581, `timmy@test.com`);

describe('Employee', () => {
    describe('name', () => {
        it(`returns employee's name`, () => {
            expect(employee.getName()).toBe('Timothy');
        });
    });

    describe('id', () => {
        it(`returns employee's id`, () => {
            expect(employee.getId()).toBe(581);
        });
    });

    describe('email', () => {
        it(`returns employee's email`, () => {
            expect(employee.getEmail()).toBe('timmy@test.com');
        });
    });

    describe('role', () => {
        it(`returns correct role`, () => {
            expect(employee.getRole()).toBe('Employee');
        });
    });
});