const Intern = require('../lib/Intern');

describe('Intern', () => {
    let intern;
    beforeEach(() => {
        intern = new Intern('Monkey D. Luffy', 420, 'monkey@luffy.com', 'Wano University');
    })
    describe('Initialization', () => {
        it('should create an object with a name, id, and email if provided valid arguments', () => {
            const intern = new Intern('Monkey D. Luffy', 420, 'monkey@luffy.com', 'ThousandSunny');

            expect(intern.name).toEqual('Monkey D. Luffy');
            expect(intern.id).toEqual(420);
            expect(intern.email).toEqual('monkey@luffy.com');
            expect(intern.school).toEqual('ThousandSunny');
        }); // Initializtion of object check if valid arguments

        it('should throw an error if provided no arguments', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Intern();

            //should throw an error in the callback function
            expect(cb).toThrow();
        }); //Negative check on callback function with empty arguments

        it('should throw an error if only name is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Intern('Monkey D. Luffy');

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <id> to be a non-negative number');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name> is provided

        it('should throw an error if only name and id is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Intern('Monkey D. Luffy', 420);

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <email> to be a non-empty string');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name> and <id> is provided

        it('should throw an error if only name, id, and email is provided', () => {
            // Wrap the object initialization in a callback function that Jest will run 
            const cb = () => new Intern('Monkey D. Luffy', 420, 'ThousandSunny');

            // define the error message that is expected to be thrown
            const err = new Error('Expected parameter <school> to be a non-empty string');

            // Verify that the correct error was thrown when the callback is executed
            expect(cb).toThrowError(err);
        }); // Checking to see if only <name>, <id>, and <email>is provided

        it('should throw an error if <name> is not a string', () => {
            const cb = () => new Intern(5, 2, 'monkey@luffy.com');
            const err = new Error('Expected parameter <name> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <name> is not a string

        it('should throw an error if <id> is not a number', () => {
            const cb = () => new Intern('Monkey D. Luffy', '2', 'monkey@luffy.com');
            const err = new Error('Expected parameter <id> to be a non-negative number');

            expect(cb).toThrowError(err);
        }); // Checking to see if <id> is not a number

        it('should throw an error if <email> is not a string', () => {
            const cb = () => new Intern('Monkey D. Luffy', 2, 1);
            const err = new Error('Expected parameter <email> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <email> is not a string

        it('should throw an error if <school> is not a string', () => {
            const cb = () => new Intern('Monkey D. Luffy', 2, 'monkey@luffy.com', 1);
            const err = new Error('Expected parameter <school> to be a non-empty string');

            expect(cb).toThrowError(err);
        }); // Checking to see if <school> is not a string


    });
    describe('getName', () => {
        it('should return the employee name', () => {
            expect(intern.getName()).toEqual('Monkey D. Luffy');
        })
    });
    describe('getId', () => {
        it('should return the intern id', () => {
            expect(intern.getId()).toEqual(420);
        })
    });
    describe('getEmail', () => {
        it('should return the intern email', () => {
            expect(intern.getEmail()).toEqual('monkey@luffy.com');
        })
    });
    describe('getRole', () => {
        it('should return the intern role', () => {
            expect(intern.getRole()).toEqual('Intern');
        })
    });
    describe('getSchool', () => {
        it('should return the intern school', () => {
            expect(intern.getSchool()).toEqual('Wano University');
        })
    });
})