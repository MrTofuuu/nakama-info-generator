const Manager = require('../lib/Manager');

describe('Manager', () => {
    let manager;
    beforeEach(() => {
        manager = new Manager('Monkey D. Luffy', 420, 'monkey@luffy.com', 1010);
    })
    describe('Initialization', () => {
        it('should create an object with a name, id, and email if provided valid arguments', () => {

            expect(manager.name).toEqual('Monkey D. Luffy');
            expect(manager.id).toEqual(420);
            expect(manager.email).toEqual('monkey@luffy.com');
            expect(manager.officeNumber).toEqual(1010);
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
            const err = new Error('Expected parameter <officeNumber> to be a non-negative number');

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

        it('should throw an error if <officeNumber> is not a number', () => {
            const cb = () => new Manager('Monkey D. Luffy', 2, 'monkey@luffy.com', '123');
            const err = new Error('Expected parameter <officeNumber> to be a non-negative number');

            expect(cb).toThrowError(err);
        }); // Checking to see if <officeNumber> is not a number


    });
    describe('getName', () => {
        it('should return the employee name', () => {
            expect(manager.getName()).toEqual('Monkey D. Luffy');
        })
    });
    describe('getId', () => {
        it('should return the manager id', () => {
            expect(manager.getId()).toEqual(420);
        })
    });
    describe('getEmail', () => {
        it('should return the manager email', () => {
            expect(manager.getEmail()).toEqual('monkey@luffy.com');
        })
    });
    describe('getRole', () => {
        it('should return the manager role', () => {
            expect(manager.getRole()).toEqual('Manager');
        })
    });
})