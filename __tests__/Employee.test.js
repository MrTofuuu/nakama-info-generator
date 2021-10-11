const Employee = require('../lib/Employee');


describe('Employee', () => {
    let employee;
    beforeEach(() => {
        employee = new Employee('Monkey D. Luffy', 420, 'monkey@luffy.com');
    })
    describe('Initialization of Employee', () => {
        it('should create an object with a name, id, and email if provided valid arguments', () => {
            const employee = new Employee('Monkey D. Luffy', 420, 'monkey@luffy.com');

            expect(employee.name).toEqual('Monkey D. Luffy');
            expect(employee.id).toEqual(420);
            expect(employee.email).toEqual('monkey@luffy.com');
        }); // Initializtion of object check if valid arguments

        it('should throw an error if provided no arguments', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Employee();

            //should throw an error in the callback function
            expect(cb).toThrow();
        }); //Negative check on callback function with empty arguments

        it('should throw an error if only name is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Employee('Monkey D. Luffy');

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <id> to be a non-negative number');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name> is provided

        it('should throw an error if only name and id is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Employee('Monkey D. Luffy', 420);

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <email> to be a non-empty string');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name> is provided

        it('should throw an error if <name> is not a string', () => {
            const cb = () => new Employee(5, 2, 'monkey@luffy.com');
            const err = new Error('Expected parameter <name> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <name> is not a string

        it('should throw an error if <id> is not a number', () => {
            const cb = () => new Employee('Monkey D. Luffy', '2', 'monkey@luffy.com');
            const err = new Error('Expected parameter <id> to be a non-negative number');

            expect(cb).toThrowError(err);
        }); // Checking to see if <id> is not a number

        it('should throw an error if <email> is not a string', () => {
            const cb = () => new Employee('Monkey D. Luffy', 2, 1);
            const err = new Error('Expected parameter <email> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <email> is not a string



    });
});