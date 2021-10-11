const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, and email if provided valid arguments', () => {
            const engineer = new Manager('Monkey D. Luffy', 420, 'monkey@luffy.com', 'ThousandSunny');

            expect(engineer.name).toEqual('Monkey D. Luffy');
            expect(engineer.id).toEqual(420);
            expect(engineer.email).toEqual('monkey@luffy.com');
            expect(engineer.officeNumber).toEqual('ThousandSunny');
        }); // Initializtion of object check if valid arguments

        it('should throw an error if provided no arguments', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Manager();

            //should throw an error in the callback function
            expect(cb).toThrow();
        }); //Negative check on callback function with empty arguments

        it('should throw an error if only name is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Manager('Monkey D. Luffy');

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <id> to be a non-negative number');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name> is provided

        it('should throw an error if only name and id is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Manager('Monkey D. Luffy', 420);

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <email> to be a non-empty string');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name> and <id> is provided

        it('should throw an error if only name, id, and email is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Manager('Monkey D. Luffy', 420, 'ThousandSunny');

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <officeNumber> to be a non-empty string');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name>, <id>, and <email>is provided

        it('should throw an error if <name> is not a string', () => {
            const cb = () => new Manager(5, 2, 'monkey@luffy.com');
            const err = new Error('Expected parameter <name> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <name> is not a string

        it('should throw an error if <id> is not a number', () => {
            const cb = () => new Manager('Monkey D. Luffy', '2', 'monkey@luffy.com');
            const err = new Error('Expected parameter <id> to be a non-negative number');

            expect(cb).toThrowError(err);
        }); // Checking to see if <id> is not a number

        it('should throw an error if <email> is not a string', () => {
            const cb = () => new Manager('Monkey D. Luffy', 2, 1);
            const err = new Error('Expected parameter <email> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <email> is not a string

        it('should throw an error if <email> is not a string', () => {
            const cb = () => new Manager('Monkey D. Luffy', 2, 'monkey@luffy.com', 1);
            const err = new Error('Expected parameter <officeNumber> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <email> is not a string


    });
})