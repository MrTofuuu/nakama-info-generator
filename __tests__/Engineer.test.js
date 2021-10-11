const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    let engineer;
    beforeEach(() => {
        engineer = new Engineer('Monkey D. Luffy', 420, 'monkey@luffy.com', 'GomuGomu');
    })
    describe('Initialization', () => {
        it('should create an object with a name, id, and email if provided valid arguments', () => {
            // const engineer1 = new Engineer('Monkey D. Luffy', 420, 'monkey@luffy.com', 'GomuGomu');

            expect(engineer.name).toEqual('Monkey D. Luffy');
            expect(engineer.id).toEqual(420);
            expect(engineer.email).toEqual('monkey@luffy.com');
            expect(engineer.github).toEqual('GomuGomu');
        }); // Initializtion of object check if valid arguments

        it('should throw an error if provided no arguments', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Engineer();

            //should throw an error in the callback function
            expect(cb).toThrow();
        }); //Negative check on callback function with empty arguments

        it('should throw an error if only name is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Engineer('Monkey D. Luffy');

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <id> to be a non-negative number');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name> is provided

        it('should throw an error if only name and id is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Engineer('Monkey D. Luffy', 420);

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <email> to be a non-empty string');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name> and <id> is provided

        it('should throw an error if only name, id, and email is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Engineer('Monkey D. Luffy', 420, 'GomuGomu');

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <github> to be a non-empty string');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name>, <id>, and <email>is provided

        it('should throw an error if <name> is not a string', () => {
            const cb = () => new Engineer(5, 2, 'monkey@luffy.com');
            const err = new Error('Expected parameter <name> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <name> is not a string

        it('should throw an error if <id> is not a number', () => {
            const cb = () => new Engineer('Monkey D. Luffy', '2', 'monkey@luffy.com');
            const err = new Error('Expected parameter <id> to be a non-negative number');

            expect(cb).toThrowError(err);
        }); // Checking to see if <id> is not a number

        it('should throw an error if <email> is not a string', () => {
            const cb = () => new Engineer('Monkey D. Luffy', 2, 1);
            const err = new Error('Expected parameter <email> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <email> is not a string

        it('should throw an error if <github> is not a string', () => {
            const cb = () => new Engineer('Monkey D. Luffy', 2, 'monkey@luffy.com', 1);
            const err = new Error('Expected parameter <github> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <github> is not a string


    });
    describe('getName', () => {
        it('should return the employee name', () => {
            expect(engineer.getName()).toEqual('Monkey D. Luffy');
        })
    });
    describe('getId', () => {
        it('should return the engineer id', () => {
            expect(engineer.getId()).toEqual(420);
        })
    });
    describe('getEmail', () => {
        it('should return the engineer email', () => {
            expect(engineer.getEmail()).toEqual('monkey@luffy.com');
        })
    });
    describe('getRole', () => {
        it('should return the engineer role', () => {
            expect(engineer.getRole()).toEqual('Engineer');
        })
    });
    describe('getGithub', () => {
        it('should return the engineer role', () => {
            expect(engineer.getGithub()).toEqual('GomuGomu');
        })
    });
})